const Model = require('../sequelize/model')
const getDate = require('./date_util')
const mark = require('./markdown_util')

const Op = Model.sequelize.Op
const pageSize = 10
async function list(ctx, next) {
    const now = Date.now()
    const page = Math.max(1, ctx.reqQuery.page | 0)
    ctx.locals.articles = await Model.article.findAndCountAll({
        where: {
            status: 1
        },
        order: [
            ['create_at', 'desc']
        ],
        offset: (page - 1) * pageSize,
        limit: pageSize,
        col: 'id'
    })

    const authors = ctx.locals.authors = {}
    for (let article of ctx.locals.articles.rows) {
        article.date = getDate(now - article.create_at.getTime())
        authors[article.author_id] = await Model.account.findOne({
            where: {
                id: article.author_id,
                active: true
            }
        })
    }
    await ctx.render('layout/article_list')
}

async function article(ctx, next) {
    const id = ctx.reqParam.id | 0
    if (id <= 0) {
        ctx.error('Not found', 404)
        return
    }
    const article = await Model.article.findOne({
        where: {
            status: 1,
            id: id
        }
    })
    if (!article) {
        ctx.error('Not found', 404)
        return
    }
    const content = await Model.content.findOne({
        where: {
            id: article.content_id,
            author_id: article.author_id
        }
    })
    if (!content) {
        ctx.error('Not found', 404)
        return
    }
    ctx.locals.article = article
    ctx.locals.content = content
    ctx.locals.content_html = mark(content.text)
    ctx.locals.date = getDate(Date.now() - article.create_at.getTime())
    ctx.locals.author = await Model.account.findOne({
        where: {
            id: article.author_id,
            active: true
        }
    })
    await ctx.render('layout/article')
}

async function account(ctx, next) {
    const id = ctx.reqParam.id | 0
    if (id <= 0) {
        ctx.error('Not found', 404)
        return
    }
    const account = await Model.account.findOne({
        where: {
            active: true,
            id: id
        }
    })
    if (!account) {
        ctx.error('Not found', 404)
        return
    }
    ctx.locals.account = account
    await ctx.render('layout/account')
}

module.exports = {
    list,
    article,
    account
}