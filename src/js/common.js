$(document).ready(function () { 

    // Слайдере в баннере на главной
    $('.js--main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        swipe: false,
        prevArrow: $('.js--main-slider__nav-item_prev'),
        nextArrow: $('.js--main-slider__nav-item_next'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true,
                }
            }
        ]
    });

});