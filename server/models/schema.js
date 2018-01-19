const db = require('./db')

const usersSchema = new db.Schema({
  id: String,
  name: String
})

const todosSchema = new db.Schema({
  id: String,
  name: String
})

const bookTitleSchema = new db.Schema({
  id: Number,
  name: String,
  titles: String
})

const bookListSchema = new db.Schema({
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
  Users: db.model('User', usersSchema),
  Todos: db.model('Todo', todosSchema),
  BookTitles: db.model('BookTitle', bookTitleSchema),
  BookLists: db.model('BookList', bookListSchema),
  Books: db.model('Book', bookSchema)
}

module.exports = Models