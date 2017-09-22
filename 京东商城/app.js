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



app.listen(3000, () => {
    console.log('3000............')
})