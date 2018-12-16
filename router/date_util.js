const year = 365 * 24 * 3600 * 1000
const yearI = 1 / year
const month = 30 * 24 * 3600 * 1000
const monthI = 1 / month
const day = 24 * 3600 * 1000
const dayI = 1 / day
const hour = 3600 * 1000
const hourI = 1 / hour
const minute = 60 * 1000
const minuteI = 1 / minute

function getDate(delta) {
    let text
    switch (true) {
        case delta > year:
            text = ((delta * yearI) | 0) + '年前'
            break
        case delta > month:
            text = ((delta * monthI) | 0) + '个月前'
            break
        case delta > day:
            text = ((delta * dayI) | 0) + '天前'
            break
        case delta > hour:
            text = ((delta * dayI) | 0) + '小时前'
            break
        case delta > minute:
            const minutes = (delta * minuteI) | 0
            text = minutes > 10 ? (minutes + '分钟前') : '刚刚'
            break
        default:
            text = '刚刚'
            break
    }
    return text
}
module.exports = getDate