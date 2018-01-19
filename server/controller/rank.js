const axios = require('axios')
const rank = require('../api').rank

module.exports = {
  // 获取书籍分类
  async getRankCategory (ctx) {
    const rankCategoryData = await axios.get(rank.rankCategory)
    ctx.body = rankCategoryData.data
  },

  // 获取排名详情
  async getRankInfo (ctx) {
    const rankInfo = await axios.get(rank.rankInfo + `/${ctx.params.id}`)
    ctx.body = rankInfo.data
  }
}
