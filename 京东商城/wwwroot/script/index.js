// 轮播图右侧:左右滑动(促销/公告)
$('.fs_col3 .notice .promotion .first').mouseover(function () {
    $('.fs_col3 .notice .promotion .active').animate({
        left: '0px'
    })
    $('.fs_col3 .notice .notice_content .first').css({
        display: 'block'
    })
    $('.fs_col3 .notice .notice_content .second').css({
        display: 'none'
    })
})
$('.fs_col3 .notice .promotion .second').mouseover(function () {
    $('.fs_col3 .notice .promotion .active').animate({
        left: '55px'
    })
    $('.fs_col3 .notice .notice_content .first').css({
        display: 'none'
    })
    $('.fs_col3 .notice .notice_content .second').css({
        display: 'block'
    })
})

// 点击顶部图片X消失
$('.nav .nav_close').click(function () {
    $('.nav-img').fadeOut('slow')
})

// 顶部大型轮播图
var index = 0;
var timer = setInterval(changeIndex, 3000);

function changeIndex() {
    index = index >= $('.imgBox img').length - 1 ? 0 : index + 1;
    changeImage();
}

function changeImage() {
    $('.imgBox img').eq(index).fadeIn('fast').siblings().fadeOut('fast');
    $('.indicators span').eq(index).addClass('current').siblings().removeClass('current');
}
$('.fs_col2 .imgBox img').hover(function () {
    $('.fs_col2 .buttons span').css('display', 'block')
})
$('#prev').click(function () {
    index = index <= 0 ? $('img').length - 1 : index - 1;
    changeImage();
})

$('#next').click(function () {
    changeIndex();
})

$('.indicators span').hover(function () {
    clearInterval(timer);
    index = $(this).index();
    changeImage();
}, function () {
    timer = setInterval(changeIndex, 3000);
})
$('.buttons span').hover(function () {
    clearInterval(timer);
}, function () {
    timer = setInterval(changeIndex, 3000);
})

// 顶部定位
$('nav .nav-navSecond .address').mouseover(function () {
    $('nav .header .location').css({
        'display': 'block'
    })
    $('nav .header .location').mouseenter(function () {
        $(this).css({
            'display': 'block'
        })
        $('nav .nav-navSecond .address').addClass('addressMouseover')
    }).mouseleave(function () {
        $(this).css({
            'display': 'none'
        })
        $('nav .nav-navSecond .address').removeClass('addressMouseover')
    })
    $(this).addClass('addressMouseover')
}).mouseout(function () {
    $('nav .header .location').css('display', 'none')
    $(this).removeClass('addressMouseover')
})

$('nav .header .location ul li').click(function () {
    $(this).addClass('click').siblings().removeClass('click')
    $('nav .nav-navSecond .address small').text($(this).text())
})

// 顶部我的京东
$('nav .nav-navSecond .MJD').mouseenter(function () {
    $(this).addClass('nav_hover')
    $('nav .header .myJD').removeClass('hidden')
    $('nav .header .myJD').mouseenter(function () {
        $(this).removeClass('hidden')
        $('nav .nav-navSecond .MJD').addClass('nav_hover')
    }).mouseleave(function () {
        $(this).addClass('hidden')
        $('nav .nav-navSecond .MJD').removeClass('nav_hover')
    })
}).mouseout(function () {
    $('nav .header .myJD').addClass('hidden')
    $(this).removeClass('nav_hover')
})
// 顶部客户服务
$('nav .nav-navSecond .KHFW').mouseenter(function () {
    $(this).addClass('nav_hover')
    $('nav .header .service').removeClass('hidden')
    $('nav .header .service').mouseenter(function () {
        $(this).removeClass('hidden')
        $('nav .nav-navSecond .KHFW').addClass('nav_hover')
    }).mouseleave(function () {
        $(this).addClass('hidden')
        $('nav .nav-navSecond .KHFW').removeClass('nav_hover')
    })
}).mouseout(function () {
    $('nav .header .service').addClass('hidden')
    $(this).removeClass('nav_hover')
})
// 顶部网站导航
$('nav .nav-navSecond .WZDH').mouseenter(function () {
    $(this).addClass('nav_hover')
    $('nav .header .GPS').removeClass('hidden')
    $('nav .header .GPS').mouseenter(function () {
        $(this).removeClass('hidden')
        $('nav .nav-navSecond .WZDH').addClass('nav_hover')
    }).mouseleave(function () {
        $(this).addClass('hidden')
        $('nav .nav-navSecond .WZDH').removeClass('nav_hover')
    })
}).mouseout(function () {
    $('nav .header .GPS').addClass('hidden')
    $(this).removeClass('nav_hover')
})

// 轮播图左侧大图滑动
$('.fs_left img').mouseover(function () {
    $('.fs_right img').stop().animate({
        width: 990
    }, 'fast')
    $('.fs_right img').mouseenter(function () {
        $(this).stop().animate({
            width: 990
        }, 'fast')
    }).mouseleave(function () {
        $(this).stop().animate({
            width: 0
        }, 'fast')
    })
}).mouseout(function () {
    $('.fs_right img').stop().animate({
        width: 0
    }, 'fast')
})

// 登录状态下的轮播图
var SmallIndex = 0;
changeSmallImage()
function changeSmallIndex() {
    SmallIndex = SmallIndex >= $('.already_login .carousel-container').length - 1 ? 0 : SmallIndex + 1;
    changeSmallImage();
}

function changeSmallImage() {
    $('.already_login .carousel-container').eq(SmallIndex).fadeIn('fast').siblings().fadeOut('fast');
}
$('.already_login .down .left').click(function (e) {
    e.preventDefault()
    SmallIndex = SmallIndex <= 0 ? $('.already_login .carousel-container').length - 1 : SmallIndex - 1;
    changeSmallImage();
})

$('.already_login .down .right').click(function (e) {
    e.preventDefault()
    changeSmallIndex();
})

// 秒杀倒计时
$(function () {
    var date = new Date('2017-09-23 12:00:00')
    $('.seckilling .right .Countdown').countdown({
        until: date,
        padZeroes: true
    })
})