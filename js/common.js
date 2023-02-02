// swiper

var swiper = new Swiper('.swiper-container', {
    loop: false,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    loop: true
});

$('.btn_pause').on('click', function () {
    swiper.autoplay.stop();
    $(this).hide();
    $(this).next().show();
})
$('.btn_play').on('click', function () {
    swiper.autoplay.start();
    $(this).hide();
    $(this).prev().show();
})
$('.gnb > ul, .bg_nav').on('mouseenter keyup', function () {
    $(this).find('ul').show()
    $('.bg_nav').show();
})
$('.bg_nav').on('mouseleave', function () {
    $('.gnb').children('ul').find('ul').hide()
    $(this).hide();
})

$('.util li:first-child a').on('focus', function () {
    $('.gnb').children('ul').find('ul').hide();
    $('bg_nav').hide();
});

// open 

$('#header .open').on('click', function () {
    $(this).toggleClass('active')
    $('#header .cd').toggleClass('active')
    $('#section').toggleClass('active')
    $('.homeLogo.logo1').toggleClass('active')
    $('.navUl').toggleClass('active')
})

$('#header #nav').on('mouseover', function () {
    $(this).find('.depth2').stop().slideDown();

})
$('#header #nav').on('mouseout', function () {
    $(this).find('.depth2').stop().slideUp();

})
$('#header .open').on('click', function () {
    $(this).toggleClass('on')
})
