const db = require('./db')

const navSchema = new db.Schema({
  id: Number,
  name: String,
  titles: String
})

const listSchema = new db.Schema({
  id: Number,
  name: String,
  author: String,
  images: String,
  ratings: String,
  wordcount: String,
  type: String,
  intro: String,
  serialize: String,
  like: String
})

const bookSchema = new db.Schema({
  id: Number,
  err: Number,
  bookName: String,
  title: String,
  content: String
})

const Models = {
  Nav: db.model('nav', navSchema),
  List: db.model('list', listSchema),
  Book: db.model('book', bookSchema),
}

module.exports = Models