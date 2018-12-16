const config = require('./config_' + (process.env.NODE_ENV || 'dev'))
config._version = (function() {
    const now = new Date,
        version = {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            date: now.getDate(),
            hour: now.getHours(),
            minute: now.getMinutes()
        };
    ['month', 'date', 'hour', 'minute'].forEach(function(key) {
        if (version[key] < 10) {
            version[key] = '0' + version[key]
        }
    });
    return [version.year, version.month, version.date, version.hour, version.minute].join('')
})()
module.exports = config