const db = require('./db')

const usersSchema = new db.Schema({
  id: String,
  name: String
})

const todosSchema = new db.Schema({
  id: String,
  name: String
})

const Models = {
  Users: db.model('User', usersSchema),
  Todos: db.model('Todo', todosSchema)
}

module.exports = Models