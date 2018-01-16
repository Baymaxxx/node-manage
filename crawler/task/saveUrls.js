const cheerio = require('cheerio')
const express = require('express')
const app = express()
const superagent = require('superagent')
require('superagent-charset')(superagent)
const async = require('async');
const config = require('../config')
const DB = require('../model')

let saveToSql = (navUrls) => {
    console.log(navUrls)
    DB.Nav.remove({}, (err, docs) => {
        DB.Nav.insertMany(navUrls,(err, docs) => {
            if(err) console.log(err);
            console.log('保存成功：' + docs);
        });
    }) 
}
let fetNavList = (url) => {
    return new Promise((resolve, reject) => {
        superagent.get(url)
            .charset('gbk')
            .end((err, res) => {
                const $ = cheerio.load(res.text);
                let urls = []
                $('.nav li').each((i, v) => {
                    if (i > 0 && i < 9) {
                        urls.push({
                            id: i,
                            name: $(v).find('a').text(),
                            url: config.indexUrl + $(v).find('a').attr('href'),
                            titleList: []
                        })
                    }
                })
                resolve(urls);
            })
    })
}

let fetTitleList = (titleUrls) => {
    return new Promise((resolve, reject) => {
        async.mapLimit(titleUrls, 3, function (url, callback) {
            superagent.get(url)
                .charset('gbk')
                .end((err, res) => {
                    const $ = cheerio.load(res.text);
                    let titleList = []
                    $('#newscontent .r li').each((i, v) => {
                        titleList.push({
                            id: $(v).find('.s2 a').attr('href').slice(6, -1),
                            name: $(v).find('.s2').text(),
                            author: $(v).find('.s5').text(),
                            url: config.indexUrl + $(v).find('.s2 a').attr('href'),
                            chapterList: []
                        })
                    })
                    callback(null, titleList)
                })
        }, function (err, results) {
            resolve(results);
        })
    })
}

app.get('/', function (req, response) {
    let titleUrls = [];
    let thisNavUrls = [];
    fetNavList(config.indexUrl).then((navUrls) => {
        thisNavUrls = navUrls;
        for (let i = 0; i < navUrls.length; i++) {
            titleUrls.push(navUrls[i].url);
        }
    }).then(() => {
        fetTitleList(titleUrls).then((results) => {
            for (let i = 0; i < thisNavUrls.length; i++) {
                thisNavUrls[i].titleList = results[i];
            }
            response.send(thisNavUrls);
            saveToSql(thisNavUrls);
        })
    })
})

app.listen('2222', function () {
    console.log('server listening on 2222')
})