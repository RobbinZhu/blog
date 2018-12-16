const Router = require('fast_tcp_server').router
const Model = require('../sequelize/model')
const loginUtil = require('./login_util')
const Op = Model.sequelize.Op
const router = new Router

router
    .all('*', loginUtil.filterAccount)
    .get('/account', async function(ctx) {
        const account_id = ctx.locals.account_id
        const account = await Model.account.findOne({
            where: {
                id: account_id,
                status: 1
            }
        })
        ctx.json({
            id: account.id,
            name: account.name,
            email: account.email,
            avatar: account.avatar,
            active: account.active,
            description: account.description
        })
    })
    .get('/article', async function(ctx) {
        const account_id = ctx.locals.account_id
        const list = await Model.article.findAndCountAll({
            where: {
                author_id: account_id
            },
            col: 'id'
        })
        for (let article of list.rows) {
            if (article.content_id) {
                article.content = await Model.content.findOne({
                    where: {
                        author_id: account_id,
                        id: article.content_id
                    }
                })
            }
        }
        ctx.json(list)
    })
    .post('/article', async function(ctx) {
        const account_id = ctx.locals.account_id
        const topic_id = ctx.reqBody.topic_id | 0
        if (!topic_id) {
            ctx.fail('no topic_id specified')
            return
        }
        const content = await Model.content.create({
            text: '',
            author_id: account_id
        })
        if (content) {
            const article = await Model.article.create({
                title: new Date().toLocaleString(),
                content_id: content.id,
                status: 0,
                secret: true,
                author_id: account_id,
                topic_id: topic_id
            })
            ctx.json(article)
        } else {
            ctx.fail('can not create article')
        }
    })
    .post('/article/publish', async function(ctx) {
        const account_id = ctx.locals.account_id
        const article_id = ctx.reqBody.id | 0
        if (!article_id) {
            ctx.fail('no article_id specified')
            return
        }
        const article = await Model.article.update({
            status: 1
        }, {
            where: {
                author_id: account_id,
                id: article_id,
                status: 0
            }
        })
        ctx.json(article)
    })
    .post('/article/cancelPublish', async function(ctx) {
        const account_id = ctx.locals.account_id
        const article_id = ctx.reqBody.id | 0
        if (!article_id) {
            ctx.fail('no article_id specified')
            return
        }
        const article = await Model.article.update({
            status: 0
        }, {
            where: {
                author_id: account_id,
                id: article_id,
                status: 1
            }
        })
        ctx.json(article)
    })
    .post('/article/:id', async function(ctx) {
        const account_id = ctx.locals.account_id
        const article_id = ctx.reqParam.id | 0
        if (!article_id) {
            ctx.fail('no article_id specified')
            return
        }
        const title = (ctx.reqBody.title || '').toString().trim()
        if (!title.length) {
            ctx.fail('no article title specified')
            return
        }
        const article = await Model.article.update({
            title: title.replace(/</ig, '%3C').replace(/>/ig, '%3E').slice(0, 255)
        }, {
            where: {
                author_id: account_id,
                id: article_id
            }
        })
        ctx.json(article)
    })
    .post('/article/info/:id', async function(ctx) {
        const account_id = ctx.locals.account_id
        const article_id = ctx.reqParam.id | 0
        if (!article_id) {
            ctx.fail('no article_id specified')
            return
        }
        const description = (ctx.reqBody.description || '').toString().trim()
        const thumb = (ctx.reqBody.thumb || '').toString().trim()
        const article = await Model.article.update({
            description: description.replace(/</ig, '%3C').replace(/>/ig, '%3E').slice(0, 255),
            thumb: thumb
        }, {
            where: {
                author_id: account_id,
                id: article_id
            }
        })
        ctx.json(article)
    })
    .get('/topic', async function(ctx) {
        const account_id = ctx.locals.account_id
        const topics = await Model.topic.findAll({
            where: {
                author_id: account_id,
                status: {
                    [Op.gt]: -1
                }
            },
            col: 'id'
        })
        ctx.json(topics)
    })
    .get('/article/all', async function(ctx) {
        const account_id = ctx.locals.account_id
        const articles = await Model.article.findAll({
            where: {
                author_id: account_id,
                status: {
                    [Op.gt]: -1
                }
            },
            col: 'id'
        })
        ctx.json(articles)
    })
    .get('/content/:id', async function(ctx) {
        const id = ctx.reqParam.id | 0
        if (!id) {
            ctx.fail('no id specified')
            return
        }
        const account_id = ctx.locals.account_id
        const content = await Model.content.findOne({
            where: {
                id: id,
                author_id: account_id
            }
        })
        ctx.json(content)
    })
    .post('/content/:id', async function(ctx) {
        const id = ctx.reqParam.id | 0
        if (!id) {
            ctx.fail('no id specified')
            return
        }
        const account_id = ctx.locals.account_id
        const content = await Model.content.update({
            text: ctx.reqBody.text
        }, {
            where: {
                id: id,
                author_id: account_id
            }
        })
        ctx.json(content)
    })
    .post('/topic', async function(ctx) {
        const name = (ctx.reqBody.name || '').toString().trim()
        if (!name.length) {
            ctx.fail('please input topic name')
            return
        }
        const account_id = ctx.locals.account_id

        const topic = await Model.topic.create({
            author_id: account_id,
            name: name.replace(/</ig, '%3C').replace(/>/ig, '%3E').slice(0, 255)
        })
        ctx.json(topic)
    })
    .post('/topic/:id', async function(ctx) {
        const id = ctx.reqParam.id | 0
        if (!id) {
            ctx.fail('no topic id specified')
            return
        }
        const name = (ctx.reqBody.name || '').toString().trim()
        if (!name.length) {
            ctx.fail('please input topic name')
            return
        }
        const account_id = ctx.locals.account_id

        const topic = await Model.topic.update({
            name: name.replace(/</ig, '%3C').replace(/>/ig, '%3E').slice(0, 255)
        }, {
            where: {
                author_id: account_id,
                id: id
            }
        })
        ctx.json(topic)
    })
    .delete('/article/:id', async function(ctx) {
        const account_id = ctx.locals.account_id
        const id = ctx.reqParam.id | 0
        if (!id) {
            ctx.fail('no id specified')
            return
        }
        const article = await Model.article.update({
            status: -1
        }, {
            where: {
                id: id,
                author_id: account_id
            }
        })
        ctx.json(article)
    })
    .delete('/topic/:id', async function(ctx) {
        const account_id = ctx.locals.account_id
        const id = ctx.reqParam.id | 0
        if (!id) {
            ctx.fail('no id specified')
            return
        }
        const updateTopic = Model.topic.update({
            status: -1
        }, {
            where: {
                id: id,
                author_id: account_id
            }
        })
        const updateArticle = Model.article.update({
            status: -1
        }, {
            where: {
                author_id: account_id,
                topic_id: id
            }
        })
        const topic = await updateTopic
        const articles = await updateArticle
        ctx.json(topic)
    })
module.exports = router