const axios = require('axios')
const comment = require('../api').comment

module.exports = {
  async getBookComments (ctx) {
    const comments = await axios.get(comment.discussions, { params: ctx.query })
    ctx.body = comments.data
  },

  async getBookShortReviews (ctx) {
    const discussions = await axios.get(comment.shortReviews, { params: ctx.query })
    ctx.body = discussions.data
  },

  async getBookReviews (ctx) {
    const reviews = await axios.get(comment.bookReviews, { params: ctx.query })
    ctx.body = reviews.data
  }
}