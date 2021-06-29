// weapp / swan / alipay / h5 / rn / tt / qq / quickapp
if (process.env.TARO_ENV === 'h5') {
    module.exports = require('./network');
} else {
    module.exports = require('./request.wechat')
}