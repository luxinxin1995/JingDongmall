var send = (res, code, message, data) => {
    res.status(200).json({ code, message, data })
}

function isLogin(req, res, next) {
    if (req.cookies.userName) {
        next()
    } else {
        if (req.xhr) {
            send(res, 'error', '请重新登录')
        } else {
            res.redirect('user/login.html')
        }
    }
}

module.exports = { send, isLogin }