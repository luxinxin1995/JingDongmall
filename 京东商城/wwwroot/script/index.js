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

// 左侧导航栏
$('.cate_menu_item').mouseover(function () {
    $('.sidebar_text').removeClass('hidden')
    $('.cate_channel').empty()
    sidebarArr[1][$(this).index()].catePartL.channel.forEach(function (item) {
        $('.cate_channel').append(
            `
                    <a href='${item.link}'>${item.text}＞</a>
                    `
        )
    });
    $('.cate_detail').empty()
    sidebarArr[1][$(this).index()].catePartL.detail.forEach(function (item, index) {
        $('.cate_detail').append(
            `
                    <dl>
                        <dt><a href=''>${item.tit.text}＞</a></dt>
                        <dd id=${index}></dd>
                    </dl>
                    `
        )
        item.con.forEach(function (item) {
            $(`#${index}`).append(
                `
                        <a href='${item.link}'>${item.text}</a>
                        `
            )
        });
    })
    $('.brand').empty()
    sidebarArr[1][$(this).index()].catePartR.brand.forEach(function (item, index) {
        $('.brand').append(
            `
                    <a href='${item.link}'>
                        <img src='${item.img}'>
                    </a>
                    `
        )
    })
    $('.brand_img').empty()
    sidebarArr[1][$(this).index()].catePartR.promo.forEach(function (item, index) {
        $('.brand_img').append(
            `
                    <a href='${item.link}'>
                        <img src='${item.img}'>
                    </a>
                    `
        )
    })

    $('.sidebar_text').mouseenter(function () {
        $(this).removeClass('hidden')
    })
    $('.sidebar_text').mouseleave(function () {
        $(this).addClass('hidden')
    })
})
$('.cate_menu_item').mouseout(function () {
    $('.sidebar_text').addClass('hidden')
})

// 秒杀倒计时
$(function () {
    var date = new Date('2017-09-23 12:00:00')
    $('.seckilling .right .Countdown').countdown({
        until: date,
        padZeroes: true
    })
})

// 秒杀数据渲染
seckillingArr[0].bd.skitems.forEach(function (item) {
    item.forEach(function (element, index) {
        $(`#img${index}`).append(
            `
                <div class='content'>
                    <a href='${element.link}'>
                        <img src='${element.img}'>
                        <p class='detail'>${element.text}</p>
                    </a>
                    <span class='shadow'></span>
                    <p class='price'>
                        <span class='current'>
                            <i>￥</i>
                            <span>${element.price}</span>
                        </span>
                        <span class='origin'>
                            <i>￥</i>
                            <s>${element.priceOrgin}</s>
                        </span>
                    </p> 
                </div>
                `
        )

    })
})
// 秒杀左侧轮播图
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-prev',
    prevButton: '.swiper-button-next',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});

// 秒杀右侧hover轮播图
var seckillingIndex = 0;
var seckillingTimer = setInterval(changeSecIndex, 2000);
function changeSecIndex() {
    seckillingIndex = seckillingIndex >= $('.JDMS_carousel_right .img li').length - 1 ? 0 : seckillingIndex + 1
    changeSecImage()
}
function changeSecImage() {
    $('.JDMS_carousel_right .img li').eq(seckillingIndex).removeClass('opacity').fadeIn('fast').siblings().addClass('opacity').fadeOut('fast')
    $('.JDMS_carousel_right .circle li').eq(seckillingIndex).addClass('current').siblings().removeClass('current')
}
$('.JDMS_carousel_right .circle li').hover(function () {
    clearInterval(seckillingTimer)
    seckillingIndex = $(this).index()
    changeSecImage()
}, function () {
    seckillingTimer = setInterval(changeSecIndex, 2000)
})

// 发现好货
findGoodsArr[0].boxBd.item.forEach(function (ele) {
    $('.findGood_content .left .box_bd ul').append(
        `
                <li>
                    <a href="${ele.link}">
                        <p>${ele.text}</p>
                        <img src="${ele.img}">
                    </a>
                </li>
                `
    )
})
$('.findGood .findGood_content .left ul li a').hover(function () {
    $(this).children('img').stop().animate({
        right: 20
    })
}, function () {
    $(this).children('img').stop().animate({
        right: 10
    })
})

// 会买专辑
specialArr[0].boxBd.item[0].forEach(function (ele) {
    // console.log(ele)
    $('.findGood .findGood_content .middle .box_bd .m_container1').append(
        `
                   <div>
                    <a href='${ele.link}'>
                        <p>${ele.title}</p>
                    </a>
                   </div>
                   `
    )
    ele.imgs.forEach(function (item) {
        // console.log(item)
        $('.findGood .findGood_content .middle .box_bd .m_container1 div a').append(
            `
                       <img src='${item}'>
                       `
        )
    }, this);
});

specialArr[0].boxBd.item[1].forEach(function (ele) {
    // console.log(ele)
    $('.findGood .findGood_content .middle .box_bd .m_container2').append(
        `
                   <div>
                    <a href='${ele.link}'>
                        <p>${ele.title}</p>
                    </a>
                   </div>
                   `
    )
    ele.imgs.forEach(function (item) {
        // console.log(item)
        $('.findGood .findGood_content .middle .box_bd .m_container2 div a').append(
            `
                       <img src='${item}'>
                       `
        )
    }, this);
});

specialArr[0].boxBd.item[2].forEach(function (ele) {
    // console.log(ele)
    $('.findGood .findGood_content .middle .box_bd .m_container3').append(
        `
                   <div>
                    <a href='${ele.link}'>
                        <p>${ele.title}</p>
                    </a>
                   </div>
                   `
    )
    ele.imgs.forEach(function (item) {
        // console.log(item)
        $('.findGood .findGood_content .middle .box_bd .m_container3 div a').append(
            `
                       <img src='${item}'>
                       `
        )
    }, this);
});


// 排行榜
TopArr[0].boxBd.title.forEach(function (item, index) {
    $('.findGood .findGood_content .right .box_bd1 .title').append(
        `
                    <a href='${item.link}' id='line${index + 1}'>${item.text}</a>
                `
    )
});
TopArr[0].boxBd.item[0].forEach(function (ele, index) {
    console.log(ele)
    $('.findGood .findGood_content .right .box_bd1 .top_bd .top1 ul').append(
        `
                       <li>
                        <a href="${ele.link}" id='bl${index + 1}'>
                            <div class='number' id='num${index + 1}'>${index + 1}</div>
                            <div class='pic'>
                                <img src='${ele.img}'>
                            </div>
                            <p>${ele.text}</p>
                        </a>
                        </li>
                `
    )
})
TopArr[0].boxBd.item[1].forEach(function (ele, index) {
    console.log(ele)
    $('.findGood .findGood_content .right .box_bd1 .top_bd .top2 ul').append(
        `
                       <li>
                        <a href="${ele.link}" id='bl${index + 1}'>
                            <div class='number' id='num${index + 1}'>${index + 1}</div>
                            <div class='pic'>
                                <img src='${ele.img}'>
                            </div>
                            <p>${ele.text}</p>
                        </a>
                        </li>
                `
    )
})
TopArr[0].boxBd.item[2].forEach(function (ele, index) {
    console.log(ele)
    $('.findGood .findGood_content .right .box_bd1 .top_bd .top3 ul').append(
        `
                       <li>
                        <a href="${ele.link}" id='bl${index + 1}'>
                            <div class='number' id='num${index + 1}'>${index + 1}</div>
                            <div class='pic'>
                                <img src='${ele.img}'>
                            </div>
                            <p>${ele.text}</p>
                        </a>
                        </li>
                `
    )
})
TopArr[0].boxBd.item[3].forEach(function (ele, index) {
    console.log(ele)
    $('.findGood .findGood_content .right .box_bd1 .top_bd .top4 ul').append(
        `
                       <li>
                        <a href="${ele.link}" id='bl${index + 1}'>
                            <div class='number' id='num${index + 1}'>${index + 1}</div>
                            <div class='pic'>
                                <img src='${ele.img}'>
                            </div>
                            <p>${ele.text}</p>
                        </a>
                        </li>
                `
    )
})
TopArr[0].boxBd.item[4].forEach(function (ele, index) {
    console.log(ele)
    $('.findGood .findGood_content .right .box_bd1 .top_bd .top5 ul').append(
        `
                       <li>
                        <a href="${ele.link}" id='bl${index + 1}'>
                            <div class='number' id='num${index + 1}'>${index + 1}</div>
                            <div class='pic'>
                                <img src='${ele.img}'>
                            </div>
                            <p>${ele.text}</p>
                        </a>
                        </li>
                `
    )
})

$('.findGood .findGood_content .right .box_bd1 .title #line1').mouseover(function () {
    $('.findGood .findGood_content .right .box_bd1 .title .active').first().animate({
        left: 0
    }, 'fast')
    $('.findGood .findGood_content .right .box_bd1 .top1').removeClass('hidden').siblings().addClass('hidden')
})
$('.findGood .findGood_content .right .box_bd1 .title #line2').mouseover(function () {
    $('.findGood .findGood_content .right .box_bd1 .title .active').first().animate({
        left: '80px'
    }, 'fast')
    $('.findGood .findGood_content .right .box_bd1 .top2').removeClass('hidden').siblings().addClass('hidden')
})
$('.findGood .findGood_content .right .box_bd1 .title #line3').mouseover(function () {
    $('.findGood .findGood_content .right .box_bd1 .title .active').first().animate({
        left: '150px'
    }, 'fast')
    $('.findGood .findGood_content .right .box_bd1 .top3').removeClass('hidden').siblings().addClass('hidden')
})
$('.findGood .findGood_content .right .box_bd1 .title #line4').mouseover(function () {
    $('.findGood .findGood_content .right .box_bd1 .title .active').first().animate({
        left: '230px'
    }, 'fast')
    $('.findGood .findGood_content .right .box_bd1 .top4').removeClass('hidden').siblings().addClass('hidden')
})
$('.findGood .findGood_content .right .box_bd1 .title #line5').mouseover(function () {
    $('.findGood .findGood_content .right .box_bd1 .title .active').first().animate({
        left: '300px'
    }, 'fast')
    $('.findGood .findGood_content .right .box_bd1 .top5').removeClass('hidden').siblings().addClass('hidden')
})

// 会买专辑
var Findindex = 0;
var Findtimer = setInterval(FindChangeIndex, 3000);

function FindChangeIndex() {
    Findindex = Findindex >= $('.findGood .findGood_content .middle .box_bd .con').length - 1 ? 0 : Findindex + 1;
    FindChangeImage();
}

function FindChangeImage() {
    $('.findGood .findGood_content .middle .box_bd .con').eq(Findindex).removeClass('hidden').siblings().addClass('hidden');
    $('.findGood .findGood_content .middle .box_bd .circle li').eq(Findindex).addClass('current').siblings().removeClass('current');
}
$('.findGood .findGood_content .middle .box_bd .con').hover(function () {
    $('.findGood .findGood_content .middle .box_bd .but').removeClass('hidden')
})
$('.findGood .findGood_content .middle .box_bd .left').click(function () {
    Findindex = Findindex <= 0 ? $('.findGood .findGood_content .middle .box_bd .con').length - 1 : Findindex - 1;
    FindChangeImage();
})

$('.findGood .findGood_content .middle .box_bd .right').click(function () {
    FindChangeIndex();
})

$('.findGood .findGood_content .middle .box_bd .circle li').hover(function () {
    clearInterval(Findtimer);
    Findindex = $(this).index();
    FindChangeImage();
}, function () {
    Findtimer = setInterval(FindChangeIndex, 3000);
})
$('.findGood .findGood_content .middle .box_bd .btn').hover(function () {
    clearInterval(Findtimer);
}, function () {
    Findtimer = setInterval(FindChangeIndex, 3000);
})

// 领券中心
couponArr[0].boxBd.item.forEach(function (item, index) {
    $('.tickets .box_bd ul').append(
        `
                <li>
                    <a href="${item.link}">
                        <div class="info">
                            <p class="price">
                                <i>￥</i>
                                <span>${item.coupon.price}</span>
                            </p>
                            <p class="desc">
                                <i></i>
                                <span>${item.coupon.desc}</span>
                            </p>
                            <p class="limit">
                                <i></i>
                                <span>${item.coupon.limit}</span> 
                            </p>
                            <p class="more">${item.coupon.more}</p>
                        </div>
                        <img id=img${index} src="${item.img}" alt="">
                    </a>
                    <span class="shadow"></span>
                </li>
                `
    )
}, this);

$('.tickets .box_bd ul li a').mouseover(function (index) {
    console.log($(this).last())
    $(this).find('img').stop().animate({
        right: '-10px'
    }, 'slow')
})
$('.tickets .box_bd ul li a').mouseout(function (index) {
    console.log($(this).last())
    $(this).find('img').stop().animate({
        right: '15px'
    }, 'slow')
})

// 觅me
MeArr[0].boxBd.item.forEach(function (ele) {
    $('.me .box_bd .content').append(
        `
                <li>
                    <a href="${ele.link}">
                        <img src="${ele.img}" alt="">
                        <span class="title">${ele.mine.title}</span>
                        <span class="desc">
                            ${ele.mine.desc}
                            <i>查看原文></i>
                        </span>
                        <span class="seen">
                            <i></i>
                            ${ele.mine.seen}
                        </span>
                    </a>
                </li>
                `
    )
}, this);



// 享品质轮播图
var entryIndex = 0;
var entryTimer = setInterval(changeentryIndex, 3000)
function changeentryIndex() {
    entryIndex = entryIndex >= $('.item1_inner .item1_img li').length - 1 ? 0 : entryIndex + 1
    changeMeImage()
}
function changeMeImage() {
    $('.item1_inner .item1_img li').eq(entryIndex).removeClass('opacity').fadeIn('fast').siblings().addClass('opacity')
    $('.item1_inner .circle li').eq(entryIndex).addClass('current').siblings().removeClass('current')
}
$('.item1_inner .item1_img li').hover(function () {
    $('.item1_inner .but').removeClass('opacity')
})
$('.item1_inner .btn_left').click(function () {
    entryIndex = entryIndex < 0 ? $('.item1_inner .item1_img li').length - 1 : index - 1
    changeMeImage()
})
$('.item1_inner .btn_right').click(function () {
    changeentryIndex()
})
$('.item1_inner .circle li').hover(function () {
    clearInterval(entryTimer)
    entryIndex = $(this).index()
    changeMeImage()
}, function () {
    entryTimer = setInterval(changeentryIndex, 3000)
})
$('.item1_inner .but').hover(function () {
    clearInterval(entryTimer)
}, function () {
    entryTimer = setInterval(changeentryIndex, 3000)
})
// 享品质 图片左右滑动
$('.entry_big .item_small').mouseover(function (index) {
    $(this).find('img').stop().animate({
        left: '-10px'
    }, 'slow')
})
$('.entry_big .item_small').mouseout(function (index) {
    $(this).find('img').stop().animate({
        left: '0'
    }, 'slow')
})


// 还没逛够
strollArr.forEach(function (item, index) {
    $('.stroll_inner_content').append(
        `
                    <li class="" id="li${index}">
                    <a href="${item.link}">
                        <img src="${item.img}" alt="">
                        <div class="info">
                            <p class="info_name">${item.title}</p>
                            <p class="info_price">
                                <i>￥</i>
                                <span>${item.price}</span>
                            </p>
                        </div>
                    </a>
                </li>
                `
    )
});