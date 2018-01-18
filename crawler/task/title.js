const cheerio = require('cheerio')
const express = require('express')
const app = express()
const superagent = require('superagent')
require('superagent-charset')(superagent)
const async = require('async');
const config = require('../config')
const DB = require('../model')
const urls = require('./urls').splice(0, 10)

let id = 0 //计数器

let saveToSql = (navUrls) => {
  DB.Nav.remove({}, (err, docs) => {
      DB.Nav.insertMany(navUrls, (err, docs) => {
          if (err) console.log(err);
      });
  })
}

//将Unicode转汉字
let reconvert = (str) => {
  str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
    return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
  });
  return str;
}


function fetList(url, callback, id) {
  superagent.get(url)
    .charset('gbk')
    .end(function (err, res) {
      const $ = cheerio.load(res.text);
      let content = []
      $('#list dd').each((i,v) => {
        content.push($(v).find('a').text())
      })
      let obj = {
        id: id,
        name: $('#info h1').text(),
        titles: content.join('-')
      }
      callback(null, obj)
    })
}


app.get('/', function (req, response) {
  async.mapLimit(urls, 5, function (url, callback) {
    id++
    fetList(url, callback, id)
  }, function (err, results) {
    response.send(results)
    saveToSql(results)
  })
})

app.listen('3379', function () {
  console.log('server listening on 3379')
})