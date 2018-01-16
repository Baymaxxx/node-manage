const db = require('./db')

const navSchema = new db.Schema({
  id: Number,
  name: String,
  url: String,
  titleList: [{
    id: Number,
    name: String,
    author: String,
    url: String,
    chapterList: []
  }]
})

const Models = {
  Nav: db.model('nav', navSchema),
}

module.exports = Models