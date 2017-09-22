$('.login .switch2').click(function (e) {
    e.preventDefault()
    $(this).css({
        'font-weight': 700,
        color: '#E4393C'
    })
    $('.login .switch1').css({
        'font-weight': 'lighter',
        color: '#666666'
    })
    $('.scan_code').css('display', 'none')
    $('.login .form').css('display', 'block')
})

$('.content .code_img').mouseenter(function () {
    $(this).stop().animate({ left: '20px' })
    $('.content .telephone_code').css('display', 'block')
})
$('.content .code_img').mouseleave(function () {
    $(this).stop().animate({ left: '95px' })
    $('.content .telephone_code').css('display', 'none')
})