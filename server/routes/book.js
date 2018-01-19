const router = require('koa-router')()
const categoryController = require('../controller/category')
const bookController = require('../controller/book')
const rankController = require('../controller/rank')
const homeController = require('../controller/home')
const commentsController = require('../controller/comment')
const BookListController = require('../controller/booklist')

router.prefix('/api')

// 首页
router.get('/', homeController.index)

// 获取带书籍数量的父分类
router.get('/categories', categoryController.getCategoriesWithBookCount)

// 获取带子分类的分类
router.get('/sub-categories', categoryController.getCategoriesWithSubCategories)

// 获取分类详情
router.get('/category-info', categoryController.getCategoryInfo)

// 获取书籍详情 id: bookid
router.get('/book-info/:id', bookController.getBookInfo)

// 获取书籍相关推荐
router.get('/recommend/:id', bookController.getRelatedRecommendedBooks)

// 获取书籍热评
router.get('/comments/:id', bookController.getHotComments)

// 获取作者名下的书籍
router.get('/author-books', bookController.getAuthorBooks)

// 获取书籍章节 id: 书源id
router.get('/book-chapters/:id', bookController.getBookChapters)

// 获取章节详细内容
router.get('/chapters/:link', bookController.getChapterContent)

// 获取搜索结果
router.get('/search', bookController.getBookSearchResults)

// 获取书籍源
router.get('/book-sources', bookController.getBookSources)

// 获取排名分类
router.get('/rank-category', rankController.getRankCategory)

// 获取排名详情
router.get('/rank/:id', rankController.getRankInfo)

// 获取书籍讨论
router.get('/book/discussions', commentsController.getBookComments)

// 获取书籍短评
router.get('/book/short-reviews', commentsController.getBookShortReviews)

// 获取长书评
router.get('/book/reviews', commentsController.getBookReviews)

// 获取书单列表
router.get('/booklists', BookListController.getLists)

// 获取书单详情
router.get('/booklists/:id', BookListController.getListDetail)


module.exports = router
