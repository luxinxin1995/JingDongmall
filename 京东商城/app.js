const exp = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    fs = require('fs'),
    app = exp();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(require('./router/register'))
app.use(require('./router/login'))
// app.use(require('./router/index'))
app.use(exp.static('wwwroot'))

app.get('/love/life', (req, res) => {
    var data = JSON.parse(fs.readFileSync('/script/girdItem.json').toString())
    res.status(200).json({
        code: 'success',
        message: '获取数据成功',
        result: data
    })
})

app.listen(3000, () => {
    console.log('3000............')
})