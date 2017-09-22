const exp = require('express'),
    fs = require('fs'),
    common = require('../common'),
    login = exp.Router();

login.post('/user/login', (req, res) => {
    var filename = `users/${req.body.userName}.json`
    console.log(filename)
    fs.exists(filename, (exists) => {
        if (exists) {
            fs.readFile(filename, (err, data) => {
                if (err) {
                    common.send(res, 'login fail', '登录失败')
                } else {
                    var user = JSON.parse(data.toString())
                    console.log(user)
                    if (user.pwd == req.body.password) {
                        res.cookie('userName', req.body.userName)
                        common.send(res, 'success', '登录成功')
                        console.log('22222222')
                    } else {
                        common.send(res, 'login fail', '登录失败')
                    }
                }
            })
        } else {
            common.send(res, 'login fail', '用户不存在,请前往注册')
        }
    })
})

login.get('/user/logOut', (req, res) => {
    res.clearCookie('userName')
    res.redirect('/')
})

module.exports = login
