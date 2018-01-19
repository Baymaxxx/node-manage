const axios = require('axios')
const bookList = require('../api').bookList

module.exports = {
  async getLists (ctx) {
    const lists = await axios.get(bookList.lists, { params: ctx.query })
    ctx.body = lists.data
  },

  async getListDetail (ctx) {
    const detail = await axios.get(bookList.detail + `/${ctx.params.id}`)
    ctx.body = detail.data
  }
}