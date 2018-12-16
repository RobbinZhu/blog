const fs = require('fs')
const names = [
    'account',
    'article',
    'banner',
    'comment',
    'content',
    'github',
    'mail',
    'menu',
    'page',
    'resource',
    'role',
    'social',
    'tag',
    'topic'
]
try {
    fs.mkdirSync('component')
} catch (e) {}
names.forEach(function(name) {
    try {
        fs.mkdirSync('component/' + name)
    } catch (e) {}
    const index = `export default {}`
    const create = `export default {}`
    const edit = `export default {}`
    fs.writeFile('component/' + name + '/' + 'index.js', index,function(){})
    fs.writeFile('component/' + name + '/' + 'create.js', create,function(){})
    fs.writeFile('component/' + name + '/' + 'edit.js', edit,function(){})
})