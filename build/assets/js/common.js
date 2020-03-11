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

    // Слайдер партнёров на главной
    $('.js--partners-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        swipe: false,
        prevArrow: $('.js--partners-slider__arrow_prev'),
        nextArrow: $('.js--partners-slider__arrow_next'),
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    swipe: true
                }
            }
        ]
    });

});