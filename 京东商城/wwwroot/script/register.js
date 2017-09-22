$('.item-phone-wrap .input-tip .email').click(function () {
    $('.item-email-wrap').css('display', 'block')
    $(this).text('')
})
$('.item-email-wrap .input-tip .phone').click(function () {
    $('.item-email-wrap').css('display', 'none')
    $('.item-phone-wrap .input-tip .email').text('邮箱验证')
})