$(document).ready(function () { 

    // Слайдере в баннере на главной
    $('.js--main-bunner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        swipe: false,
        prevArrow: $('.js--main-bunner__slider-nav-prev'),
        nextArrow: $('.js--main-bunner__slider-nav-next'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true,
                }
            }
        ]
    });

    // Слайдере в баннере на главной
    $('.js--products-block-list__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        swipe: false,
        prevArrow: $('.js--products-block-list__slider-nav-prev'),
        nextArrow: $('.js--products-block-list__slider-nav-next'),
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    swipe: true,
                }
            }
        ]
    });

    // helpful-info slider
    $('.js--helpful-information-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipe: false,
        prevArrow: $('.js--helpful-information__slider-nav-prev'),
        nextArrow: $('.js--helpful-information__slider-nav-next'),
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: 'unslick'
            }
        ]
    });

    // Слайдеры в товаре
    $('.js--product-page-block__slider-projector').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        speed: 700,
        fade: true,
        prevArrow: $('.js--product-page-block__slider-projector-nav-prev'),
        nextArrow: $('.js--product-page-block__slider-projector-nav-next'),
        asNavFor: '.js--product-page-block__slider-nav',
        responsive: [
            {
                breakpoint: 661,
                settings: {
                    swipe: true
                }
            }
        ]
    });

    $('.js--product-page-block__slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.js--product-page-block__slider-projector',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });

    // Слайдеры в pop-up товаре

    $('.js--products-pop-up').fancybox({
        autoSize: true,
        afterShow: function() {
            $('.js--product-page-block__slider-projector_pop-up').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                swipe: true,
                speed: 700,
                fade: true,
                prevArrow: $('.js--product-page-block__slider-projector-nav-prev_pop-up'),
                nextArrow: $('.js--product-page-block__slider-projector-nav-next_pop-up'),
                asNavFor: '.js--product-page-block__slider-nav_pop-up',
                responsive: [
                    {
                        breakpoint: 661,
                        settings: {
                            swipe: true
                        }
                    }
                ]
            });
        
            $('.js--product-page-block__slider-nav_pop-up').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.js--product-page-block__slider-projector_pop-up',
                dots: false,
                arrows: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1441,
                        settings: {
                            slidesToShow: 5,
                        }
                    },
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 3,
                        }
                    }
                ]
            });
        }
    });

    // Типичный слайдер в article
    $('.js--typical-slider__projector').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        speed: 700,
        fade: true,
        prevArrow: $('.js--typical-slider__projector-nav-prev'),
        nextArrow: $('.js--typical-slider__projector-nav-next'),
        asNavFor: '.js--typical-slider-nav',
        responsive: [
            {
                breakpoint: 661,
                settings: {
                    swipe: true
                }
            }
        ]
    });

    $('.js--typical-slider-nav').slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        asNavFor: '.js--typical-slider__projector',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 10,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });


    // faq-block 
    $(document).on('click','.faq-block-list__item a',function(){
        $(this).parent().siblings().children().removeClass('active');
        $(this).toggleClass('active');
    });

    // Каунтеры

    function plusCounter(element){
        let input = $(element).closest('.basket-table__item-counter-wrapper').find('input[name="count"]');
        input.val(parseInt(input.val())+1);
        input.change();
    }

    function minusCounter(element){
        let input = $(element).closest('.basket-table__item-counter-wrapper').find('input[name="count"]');
        if (parseInt(input.val()) > 1){
            input.val(parseInt(input.val())-1);
            input.change();
        }
    }
    
    $(document).on('click','.basket-table__item-counter-more',function(){
        plusCounter(this);
        return false;
    });
    
    $(document).on('click','.basket-table__item-counter-less',function(){
        minusCounter(this);
        return false;
    });

    // Табулятор в странице товаров
    const tabLinks = document.querySelectorAll(".product-page-tabs-list-item a");
    const tabPanels = document.querySelectorAll(".product-page-tabs-content");

    for(let el of tabLinks) {
        el.addEventListener("click", e => {
            e.preventDefault();
            
            document.querySelector('.product-page-tabs-list-item.active').classList.remove("active");
            document.querySelector('.product-page-tabs-content.active').classList.remove("active");
            
            const parentListItem = el.parentElement;
            parentListItem.classList.add("active");
            const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
            
            const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
            panel[0].classList.add("active");
        });
    }

    // Табы с якорями в продукте

    const tabTopLinks = document.querySelectorAll(".product-page-block__info-bottom-hashtags li a");

    for (let el of tabTopLinks) {
        el.addEventListener("click", e => {
            e.preventDefault();

            document.querySelector('.product-page-tabs-list-item.active').classList.remove("active");
            document.querySelector('.product-page-tabs-content.active').classList.remove("active");

            


            
            const parentListItem = el.parentElement,
                index = [...parentListItem.parentElement.children].indexOf(parentListItem);
            
            tabLinks[index].parentElement.classList.add("active");

            const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
            panel[0].classList.add("active");
        });
    }

    $(function() {
        $('a[href^="#product-tab"]').on('click', function(event) {
            event.preventDefault();

            const productTabSoughtFor = $(this).attr("href"),
                productTabPosition = $(productTabSoughtFor).offset().top;
            
            $('html, body').animate({scrollTop: productTabPosition - 80}, 1000);

        });
    });

    // Куки
    setTimeout(function() {
        $(".cookies").fadeIn('fast');
    }, 2000)

    $(document).on('click', '.js--cookies-accept', function(){
        $(".cookies").hide();
    })

    // MMenu
    let $menu = $("#mobile-burger-menu").mmenu({
        "navbars": [
            {
                "position": "top",
                "content": [
                    `<div class="mobile-menu__header">
                        <div class="mobile-menu__header-top">
                            <a class="mobile-menu__header-close js--mobile-menu__header-close" href="javascript:;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                            </a>
                            <a class="mobile-menu__logo" href="index.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40">
                                    <path d="M41,18.922A19.375,19.375,0,0,0,33.275,4.309,20.654,20.654,0,0,0,22.976.048a1.393,1.393,0,0,0-1.117.247,1.311,1.311,0,0,0-.344,1.063,14.462,14.462,0,0,1,0,1.6,1.3,1.3,0,0,0,1.311,1.487A15.836,15.836,0,0,1,36.472,18.454a15.358,15.358,0,0,1-3.034,10.895,16.372,16.372,0,0,1-9.247,5.991,4.129,4.129,0,0,1-.656.075,2.062,2.062,0,0,0-1.825.773,2.911,2.911,0,0,0-.228,1.83,5.48,5.48,0,0,1,.037.746,1.207,1.207,0,0,0,.324.974,1.149,1.149,0,0,0,.781.262,2.2,2.2,0,0,0,.28-0.02,20.441,20.441,0,0,0,12.945-6.788A21.319,21.319,0,0,0,41,18.936V18.922ZM19.357,37.881c0-.166,0-0.333,0-0.5,0-1.414-.192-1.641-1.576-1.861a15.99,15.99,0,0,1-9.948-5.762A15.64,15.64,0,0,1,4.5,18.152,15.367,15.367,0,0,1,8.667,9.321a16.231,16.231,0,0,1,8.7-4.762C19.175,4.22,19.362,4,19.36,2.2q0-.227,0-0.418c0.005-.863.008-1.3-0.352-1.589A1.851,1.851,0,0,0,17.435.132c-0.16.029-.339,0.062-0.541,0.1A20.081,20.081,0,0,0,0,19.984v0.4c0,0.4,0,.794,0,1.191a3.075,3.075,0,0,0,.024.343,19.855,19.855,0,0,0,7.4,13.594A20.586,20.586,0,0,0,18.1,39.982a1.771,1.771,0,0,0,.237.017,1.05,1.05,0,0,0,.711-0.243,1.07,1.07,0,0,0,.316-0.876C19.351,38.55,19.354,38.21,19.357,37.881ZM32.021,18.966h0.284c0.2,0,.4,0,0.6,0a1.412,1.412,0,0,0,1.144-.328,1.327,1.327,0,0,0,.119-1.139A13.538,13.538,0,0,0,25.456,7.28a14,14,0,0,0-13.47,1.907,13.456,13.456,0,0,0-5.2,8.287,1.336,1.336,0,0,0,.094,1.169,1.376,1.376,0,0,0,1.139.322c0.218,0,.438,0,0.658-0.005,0.4-.007.775-0.012,1.148,0.015,0.063,0,.123.007,0.18,0.007a1.4,1.4,0,0,0,1.452-1.234A9.218,9.218,0,0,1,19.786,10.9a9.381,9.381,0,0,1,9.487,6.115C29.908,18.82,30.114,18.966,32.021,18.966Zm0.484,7.927a12.84,12.84,0,0,0,1.679-4.4A1.237,1.237,0,0,0,34,21.372a1.251,1.251,0,0,0-1.035-.312,8.9,8.9,0,0,1-1.664,0A1.548,1.548,0,0,0,29.439,22.4a9.3,9.3,0,0,1-8.484,6.737c-0.09,0-.179,0-0.269,0a9.289,9.289,0,0,1-9.051-6.253C11.064,21.2,10.867,21.068,9,21.068H8.563c-0.914,0-1.372,0-1.673.371S6.7,22.274,6.9,23.115a13.852,13.852,0,0,0,13.416,10.54H20.5A13.679,13.679,0,0,0,32.505,26.893Zm-12-13.9H20.491a7.114,7.114,0,0,0-7.216,6.96,6.941,6.941,0,0,0,2.108,5,7.223,7.223,0,0,0,5.088,2.084h0.009A7.151,7.151,0,0,0,25.528,25a6.922,6.922,0,0,0,2.079-4.973A7,7,0,0,0,20.508,12.993ZM20.469,17.37h0.007A2.71,2.71,0,0,1,23.21,20a2.544,2.544,0,0,1-.775,1.853,2.8,2.8,0,0,1-1.987.813H20.44a2.753,2.753,0,0,1-1.908-.806,2.613,2.613,0,0,1-.8-1.857A2.675,2.675,0,0,1,20.469,17.37Z"/>
                                </svg>
                                <img src="assets/img/hang-drums-logo.png" alt="">
                            </a>
                            <div class="header-basket__wrapper">
                                <a href="basket.html" class="header-basket">
                                    <div class="header-basket__price">
                                        <span>100.000 &#36;</span>
                                        <span>checkout</span>
                                    </div>
                                    <div class="header-basket__link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 22 19">
                                            <path d="M13.535,12.221H7.9c-0.291,0-.3,0-0.226.281,0.122,0.493.259,0.983,0.37,1.479a0.265,0.265,0,0,0,.314.248q4.192-.009,8.384,0c0.636,0,1.272,0,1.908,0a0.7,0.7,0,1,1,0,1.384H7.685a0.737,0.737,0,0,1-.861-0.669q-1.01-4-2.017-8.005Q4.137,4.277,3.472,1.617a0.27,0.27,0,0,0-.32-0.244c-0.822.01-1.644,0.008-2.466,0A0.683,0.683,0,0,1,0,.769,0.683,0.683,0,0,1,.517.015,0.985,0.985,0,0,1,.75-0.006q1.565,0,3.131,0a0.7,0.7,0,0,1,.783.6c0.157,0.608.32,1.215,0.458,1.827a0.31,0.31,0,0,0,.369.291Q13.338,2.7,21.185,2.7a0.8,0.8,0,0,1,.544.148,0.7,0.7,0,0,1,.231.764q-0.472,1.867-.945,3.735-0.54,2.134-1.082,4.268a0.708,0.708,0,0,1-.781.6H13.535ZM6.894,4.089c-0.372,0-.744.007-1.115,0C5.6,4.081,5.554,4.125,5.6,4.3c0.2,0.757.39,1.517,0.577,2.278a0.215,0.215,0,0,0,.251.191c0.629-.007,1.258-0.01,1.887,0,0.207,0,.242-0.082.219-0.255-0.1-.748-0.2-1.5-0.289-2.244a0.177,0.177,0,0,0-.214-0.189C7.652,4.093,7.273,4.089,6.894,4.089Zm12.144,0c-0.379,0-.758,0-1.136,0a0.172,0.172,0,0,0-.213.19c-0.006.147-.038,0.293-0.057,0.44-0.077.6-.152,1.2-0.233,1.8-0.024.176,0.018,0.257,0.221,0.253,0.629-.011,1.258-0.008,1.887,0a0.214,0.214,0,0,0,.248-0.194c0.189-.767.381-1.534,0.582-2.3,0.044-.167-0.015-0.2-0.163-0.193C19.8,4.093,19.418,4.089,19.039,4.089Zm-6.772,1.35h0c0-.374-0.008-0.748,0-1.121a0.186,0.186,0,0,0-.229-0.232c-0.714.009-1.428,0.011-2.142,0-0.207,0-.241.082-0.218,0.255,0.1,0.754.2,1.508,0.291,2.263a0.167,0.167,0,0,0,.209.169c0.628,0,1.257-.006,1.885,0a0.171,0.171,0,0,0,.2-0.214C12.261,6.186,12.266,5.812,12.266,5.438Zm1.4-.017c0,0.388,0,.775,0,1.163,0,0.115.023,0.188,0.163,0.187,0.657,0,1.314,0,1.971,0a0.132,0.132,0,0,0,.157-0.129q0.146-1.174.3-2.347c0.021-.161-0.047-0.208-0.2-0.207-0.721.006-1.442,0.008-2.163,0a0.187,0.187,0,0,0-.225.236C13.675,4.688,13.669,5.054,13.669,5.421ZM7.674,8.155c-0.293,0-.586.008-0.879,0-0.172-.006-0.208.049-0.166,0.21q0.3,1.137.575,2.279a0.225,0.225,0,0,0,.267.2c0.443-.008.886,0,1.33,0,0.253,0,.275-0.023.245-0.264-0.1-.748-0.2-1.5-0.287-2.244a0.167,0.167,0,0,0-.2-0.174C8.26,8.159,7.967,8.155,7.674,8.155Zm10.59,0c-0.279,0-.557.007-0.836,0-0.162-.006-0.257.027-0.257,0.213a3.334,3.334,0,0,1-.052.419c-0.078.6-.153,1.2-0.233,1.8-0.024.175,0.018,0.259,0.222,0.253,0.457-.013.914-0.008,1.371,0a0.205,0.205,0,0,0,.239-0.18q0.289-1.171.595-2.338c0.04-.152-0.027-0.168-0.148-0.167C18.864,8.157,18.564,8.155,18.264,8.155Zm-6,1.362c0-.374-0.008-0.748,0-1.121a0.194,0.194,0,0,0-.238-0.245c-0.535.012-1.071,0.014-1.607,0-0.218-.006-0.255.082-0.231,0.264,0.1,0.747.2,1.494,0.289,2.242a0.167,0.167,0,0,0,.2.182q0.7-.009,1.392,0a0.162,0.162,0,0,0,.195-0.2C12.262,10.265,12.266,9.891,12.266,9.517Zm1.4-.031c0,0.388,0,.776,0,1.164,0,0.115.021,0.189,0.162,0.188,0.486,0,.971,0,1.457,0a0.132,0.132,0,0,0,.157-0.129q0.146-1.174.3-2.347c0.021-.16-0.044-0.21-0.2-0.208q-0.835.01-1.671,0a0.17,0.17,0,0,0-.2.214C13.674,8.739,13.669,9.113,13.669,9.487ZM8.751,19a1.37,1.37,0,1,1,1.4-1.376A1.359,1.359,0,0,1,8.751,19Zm8.434-2.74a1.37,1.37,0,1,1-1.4,1.369A1.365,1.365,0,0,1,17.185,16.258Z"/>
                                        </svg>
                                        <span>16</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="mobile-menu__header-bottom">
                            <ul class="header-selects">
                                <li class="header-selects__item">
                                    <span>Language:</span>
                                    <div class="header-selects__item-wrapper">
                                        <select name="">
                                            <option value="">English</option>
                                            <option value="">Russia</option>
                                        </select>
                                    </div>
                                </li>
                                <li class="header-selects__item">
                                    <span>Currency:</span>
                                    <div class="header-selects__item-wrapper">
                                        <select name="">
                                            <option value="">USD</option>
                                            <option value="">RUB</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>`
                ]
            }
        ],
        "extensions": [
            "position-front",
            "position-top",
            "fullscreen"
        ],
        "navbar": {
            title: false
        }
    });


    let $icon = $(".js--burger-button");
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

    // Выбор рейтинга в продукте

    let productRating = document.querySelector('.js--reviews-block-list__item-rating'),
    productRatingItems = document.querySelectorAll('.js--reviews-block-list__item-rating-item');

    productRating.onclick = function(event) {
        let target = event.target;
        if (target.classList.contains('js--reviews-block-list__item-rating-item')) {
            removeClassFromRating(productRatingItems, 'current-active');
            target.classList.add('active', 'current-active');
        }
    }

    productRating.onmouseover = function(event) {
        let target = event.target;
        if (target.classList.contains('js--reviews-block-list__item-rating-item')) {
            removeClassFromRating(productRatingItems, 'active');
            target.classList.add('active');
            mouseOverActiveRatingClass(productRatingItems);
        }
    }

    productRating.onmouseout = function() {
        addClassToRating(productRatingItems, 'active');
        mouseOutActiveRatingClass(productRatingItems);
    }

    function removeClassFromRating(arr) {
        for (let i = 0, iLen = arr.length; i < iLen; i++) {
            for (let j = 1; j < arguments.length; j ++) {
                productRatingItems[i].classList.remove(arguments[j]);
            }
        }
    }

    function addClassToRating(arr) {
        for (let i = 0, iLen = arr.length; i < iLen; i++) {
            for (let j = 1; j < arguments.length; j ++) {
                productRatingItems[i].classList.add(arguments[j]);
            }
        }
    }

    function mouseOverActiveRatingClass(arr) {
        for (let i = 0, iLen = arr.length; i < iLen; i++) {
            if (arr[i].classList.contains('active')) {
                break;
            } else {
                arr[i].classList.add('active');
            }
        }
    }

    function mouseOutActiveRatingClass(arr) {
        for (let i = arr.length - 1; i >= 1; i--) {
            if (arr[i].classList.contains('current-active')) {
                break;
            } else {
                arr[i].classList.remove('active');
            }
        }
    }


});