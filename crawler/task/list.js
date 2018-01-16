const cheerio = require('cheerio')
const express = require('express')
const app = express()
const superagent = require('superagent')
require('superagent-charset')(superagent)
const async = require('async');
const config = require('../config')
const DB = require('../model')

let saveToSql = () => {
    DB.Nav.find({"titleList.id": 31415},(err, docs) => {
        if(err) console.log(err);
        console.log(docs);
    });
}

let fetChapterList = (chapterUrls) => {
    return new Promise((resolve, reject) => {
        async.mapLimit(titleUrls, 3, function (url, callback) {
            superagent.get(url)
                .charset('gbk')
                .end((err, res) => {
                    const $ = cheerio.load(res.text);
                    let chapterList = [];
                    $('#list dd').each((i, v) => {
                        chapterList.push({
                            id: i + 1,
                            name: $(v).find('a').text(),
                            url: config.indexUrl + $(v).find('a').attr('href'),
                            content: ''
                        })
                    })
                    let obj = {
                        lastUpdatedTime: $("#info p").eq(2).text().slice(5),
                        imgUrl: $("#fmimg img").attr('src'),
                        intro: $("#intro p").eq(0).text(),
                        chapterList: chapterList
                    }
                    callback(null, obj)
                }, function (err, results) {
                    resolve(results);
                })
        })
    })
}

app.get('/', function (req, response) {
    // fetTitleList(titleUrls).then((results) => {
    //     for (let i = 0; i < thisNavUrls.length; i++) {
    //         thisNavUrls[i].titleList = results[i];
    //     }
    //     response.send(thisNavUrls);
        saveToSql();
    // })
})

app.listen('2223', function () {
    console.log('server listening on 2223')
})