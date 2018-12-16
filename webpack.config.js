const fs = require('fs')
const path = require('path')

const frontendCss = [
    __dirname + '/public/css/reset.css',
    __dirname + '/public/css/monokai_sublime.min.css',
    __dirname + '/public/css/frontend.css',
    __dirname + '/public/css/me.css'
]

const backendCss = [
    __dirname + '/public/css/reset.css',
    __dirname + '/public/css/portal.css'
]

const frontendCssConcat = frontendCss.map(function(file) {
    return fs.readFileSync(file).toString()
}).join('')

const backendCssConcat = backendCss.map(function(file) {
    return fs.readFileSync(file).toString()
}).join('')

fs.writeFileSync(__dirname + '/public/dist/main.css', frontendCssConcat)
fs.writeFileSync(__dirname + '/public/dist/portal.css', backendCssConcat)

module.exports = {
    entry: {
        backend: './public/js/backend.js',
        frontend: './public/js/me.js'
    },
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ["transform-runtime"]
                }
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        // new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    mode: process.env.NODE_ENV == 'dev' ? 'none' : 'production'
};