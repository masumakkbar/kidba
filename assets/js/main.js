$(window).on('load', function() {
    $(".preloader").fadeOut(1000)
})

$(document).ready(function(){

    //=======================================================================
    // Modal Video / Video Popup Plugin Initialize
    //=======================================================================
    $(".video-btn, .blog-video-btn").modalVideo();

    //=======================================================================
    // Odometer / Counter Plugin Initialize
    //=======================================================================
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    //=======================================================================
    // Slider / Swiper Plugin Initialize
    //=======================================================================
    if (jQuery(".slider-active").length > 0) {
        let sliderActive1 = '.slider-active';
        let sliderInit1 = new Swiper(sliderActive1, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: false,

            autoplay: {
                delay: 5000,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-paginations',
                // dynamicBullets: true,
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            a11y: false
        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + ' [data-animation]').each(function () {
                    let anim = $(this).data('animation');
                    let delay = $(this).data('delay');
                    let duration = $(this).data('duration');

                    $(this).removeClass('anim' + anim)
                        .addClass(anim + ' animated')
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration
                        })
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass(anim + ' animated');
                        });
                });
            };
            animated();
            // Make animated when slide change
            init.on('slideChange', function () {
                $(sliderActive1 + ' [data-animation]').removeClass('animated');
            });
            init.on('slideChange', animated);
        }

        animated_swiper(sliderActive1, sliderInit1);
    }
    //=======================================================================
    // Portfolio Isotop Data Filte
    //=======================================================================
    $('.controls').on( 'click', '.gallery-filter-btn', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        $('.gallery-images').isotope({ filter: filterValue });
    });
    $('.gallery-images').imagesLoaded( function() {
        $('.gallery-images').isotope({
            itemSelector: '.gallery-image',
            layoutMode: 'packery',
        });
    });

    //=======================================================================
    // Portfolio Isotop Data Filter
    //=======================================================================
    // $('.popular-class-buttons').on( 'click', '.class-filter-btn', function() {
    //     $(this).addClass('active').siblings().removeClass('active');
    //     var filterValue = $(this).attr('data-filter');
    //     $('.popular-classes-wrapper').isotope({ filter: filterValue });
    // });
    // $('.popular-classes-wrapper').imagesLoaded( function() {
    //     $('.popular-classes-wrapper').isotope({
    //         itemSelector: '.popular-class-item',
    //         layoutMode: 'packery',
    //     });
    // });

    //=======================================================================
    // Gallery Image Popup
    //=======================================================================
    $('.gallery-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 400
		}
	});

    //=======================================================================
    // Testmonial Slider
    //=======================================================================
    $('.clients').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client-feedback',
    });
    $('.client-feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.clients',
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        autoplay: true
    });

    //=======================================================================
    // Nice Select
    //=======================================================================
    $('.course__sort-inner select').niceSelect();

    //=======================================================================
    // Partner logo Slider
    //=======================================================================
    $('.partner-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
    });

    //=======================================================================
    // Shop details image Slider
    //=======================================================================
    $('.shop-details-lg-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.shop-details-sm-images',
    });
    $('.shop-details-sm-images').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.shop-details-lg-images',
        dots: false,
        arrows: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        prevArrow: '<button class="shop-slick-prev"><i class="icofont-thin-left"></i></button>',
        nextArrow: '<button class="shop-slick-next"><i class="icofont-thin-right"></i></button>'
    });

    //=======================================================================
    // Jquery ui datepicker
    //=======================================================================
    $( "#datepicker" ).datepicker();

    //=======================================================================
    // Rating Plugin
    //=======================================================================
    $(function(){
        $("#inputStar").rating({
            "click": function (e) {
                alert(e.stars + " star");
            }
        });
    });

    // product quantity
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    //=======================================================================
    // Blog page image Slider
    //=======================================================================
    $('.blog-image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="blog-slider-btn"><i class="icofont-caret-left"></i></button>',
        nextArrow: '<button class="blog-slider-btn btn-next"><i class="icofont-caret-right"></i></button>',
    });
})