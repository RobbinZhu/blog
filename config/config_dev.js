module.exports = {
    port: process.env.PORT || 8888,
    mysql: {
        user: 'root',
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'kum_im'
    },
    site: {
        title: "测试站点标题",
        description: "测试站点描述",
        keywords: '测试站点关键字',
        url: 'https://blog.kum.im/',
        userAgent: 'Site By Robbin.Zhu',
        defaultAdminEmail: 'robbin@59124.com',
        defaultAdminPassword: 'helloworld'
    },
    cookie: {
        key: 'sid',
        maxAge: 14 * 3600 * 24 * 1000,
        domain: ".kum.im",
        httpOnly: true,
        secret: '$5^&*()_+!@helloRobbin#',
        path: '/'
    },
    github: {
        client_id: 'f3cf239bf94f35c5003d',
        client_secret: '6aedcabd0c0be0135b9a0f04950251605b5c44ff'
    },
    pageSize: 10
};