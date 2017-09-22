const exp = require('express'),
    fs = require('fs'),
    common = require('../common'),
    bodyParser = require('body-parser')
register = exp.Router();

register.post('/user/register', (req, res) => {
    console.log(req.body.userName)
    var filename = `users/${req.body.userName}.json`
    function saveFile() {
        fs.exists(filename, (exists) => {
            if (exists) {
                common.send(res, 'registered fail', '用户已经存在,请重新输入!')
            } else {
                fs.writeFile(filename, JSON.stringify(req.body), (err) => {
                    if (err) {
                        common.send(res, 'registered fail', '注册失败')
                    } else {
                        common.send(res, 'success', '注册成功!')
                    }
                })
            }
        })
    }
    fs.exists('users', (exists) => {
        if (exists) {
            saveFile()
        } else {
            fs.mkdir('users', (err) => {
                if (err) {
                    common.send(res, 'created fail', '创建文件夹失败')
                } else {
                    saveFile()
                }
            })
        }
    })
})

module.exports = register