const cheerio = require('cheerio')
const express = require('express')
const app = express()
const superagent = require('superagent')
require('superagent-charset')(superagent)
const async = require('async');
const config = require('../config')
const DB = require('../model')

let end = 10; //第几本书结束
const urlList = require('./urls').splice(0, end)

let num = 1  //第几本书开始，失败后根据提示更改此处即可

let urlId = num //第几本书 +1
let url = urlList[urlId - 1]  //url地址
let table = num  //表名
let total = 0 //总章节数
let id = 0 //计数器
const chapters = 10 //爬取多少章

let delSql = () => {
  DB.Book.remove({}, (err, docs) => { })
}

let saveToSql = (Book) => {
  DB.Book.insertMany(Book, (err, docs) => {
    if (err) console.log(err);
    if (docs[docs.length - 1].id == Book.length) {  //写入完成后开始爬取下一本书
      urlId++
      url = urlList[urlId - 1]
      table++
      id = 0
      if (urlId <= end) {
        main(url)
        console.log(`第${urlId}本书`)
      }
      return true
    }
  });
}

let trim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, '').replace(/&nbsp;/g, '')
}

//将Unicode转汉字
let reconvert = (str) => {
  str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
    return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
  });
  return str;
}

let fetUrl = (url, callback, id) => {
  superagent.get(url)
    .charset('gbk')  //该网站编码为gbk，用到了superagent-charset
    .end(function (err, res) {
      let $ = cheerio.load(res.text)
      const arr = []
      const content = reconvert($("#content").html())
      //分析结构后分割html
      const contentArr = content.split('<br><br>')
      contentArr.forEach(elem => {
        const data = trim(elem.toString())
        arr.push(data)
      })
      const obj = {
        id: id,
        err: 0,
        bookName: $('.footer_cont a').text(),
        title: $('.bookname h1').text(),
        content: arr.join('-').slice(0, 20000)
      }
      console.log(id)
      callback(null, obj)  //将obj传递给第四个参数中的results
    })
}


let main = (url) => {
  superagent.get(url)
    .charset('gbk')  //该网站编码为gbk，用到了superagent-charset
    .end(function (err, res) {
      console.log(url)
      var $ = cheerio.load(res.text);  //res.text为获取的网页内容，通过cheerio的load方法处理后，之后就是jQuery的语法了
      let urls = []
      total = $('#list dd').length
      console.log(`共${$('#list dd').length}章`)
      $('#list dd').each(function (i, v) {
        if (i < chapters) {
          urls.push('http://www.zwdu.com' + $(v).find('a').attr('href'))
        }
      })

      async.mapLimit(urls, 5, function (url, callback) {
        id++
        fetUrl(url, callback, id) //需要对章节编号，所以通过变量id来计数
      }, function (err, results) {
        // response.send(results)
        saveToSql(results)
      })
    })
}


app.get('/', function (req, response) {
  delSql()
  main(url)
})

app.listen('3379', function () {
  console.log('server listening on 3379')
})