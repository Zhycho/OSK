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

    // MMenu
    let $menu = $("#mobile-burger-menu").mmenu({
        "navbars": [
            {
                "position": "top",
                "content": [
                    `<div class="mobile-menu__header">
                        <div class="mobile-menu__header-contacts">
                            <a class="mobile-menu__mail" href="mailto:osk@osk-company.ru">osk@osk-company.ru</a>
                            <a class="mobile-menu__tel" href="tel:+73422357880">+7 (342) 235-78-80</a>
                        </div>
                        <a class="mobile-menu__header-close js--mobile-menu__header-close" href="javascript:;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                        </a>
                    </div>`
                ]
            }
        ],
        "extensions": [
            "fullscreen",
            "position-front",
            "position-top",
            "border-full"
        ],
        "navbar": {
            title: "Меню"
        }
    });


    let $icon = $(".js--burger");
    let API = $menu.data("mmenu");
    $(document).on('click','.js--mobile-menu__header-close',function(){
        API.close();
    });

    $icon.on("click", function () {
        API.open();
    });


    API.bind("opened", function () {
        setTimeout(function () {
            $icon.addClass("is-active");
        }, 10);
        $icon.on("click", function () {
            API.close();
        });
    });

    API.bind("closed", function () {
        setTimeout(function () {
            $icon.removeClass("is-active");
        }, 10);
        $icon.on("click", function () {
            API.open();
        });
    });

});