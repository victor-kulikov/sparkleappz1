jQuery(document).ready(function() {

    // Меню бургер
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });



    $(".header__burger").on('click', function() {
        $(".m-bm-hidden").slideToggle();
    })

    $('.navy-mob__item').each(function() {
        if ($(this).hasClass('menu-item-has-children')) {
            $(this).append('<span class="direction"><i class="fa fa-angle-down" aria-hidden="true"></i></span>');
        }
    });
    $(".m-bm-hidden").on('click', '.direction', function() {
        $(this).parent('li').toggleClass('active-m');
    });



    //slider-partners
    $('.slider-partners').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left slick-prev arrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right slick-next arrow" aria-hidden="true"></i>',
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }, ]
    });



    //slider-opportunities
    $('.slider-opportunities').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left slick-prev arrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right slick-next arrow" aria-hidden="true"></i>',
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


    //slider-clients
    $('.slider-clients').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });



    $(".accordion__block").accordion({
        closeOthers: true,
        animationDuration: 300,
        questionClass: '.accordion__caption',
        answerClass: '.accordion__text',
        itemClass: '.accordion__tab'
    });



    $(".accordion-questions").accordion({
        closeOthers: false,
        questionClass: '.accordion__caption',
        answerClass: '.accordion__text',
        itemClass: '.accordion__tab'
    });



    // анимация при скролле
    new WOW().init();




});