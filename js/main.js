// file variables
var lastScroll = 0;

$(document).ready(function () {

    // on scroll function
    $(window).on("scroll", scrollInit);
    function scrollInit() {
        var headerHeight = $('nav').outerHeight();
        if ($(document).scrollTop() >= headerHeight) {
            $('header').addClass('sticky');

        } else if ($(document).scrollTop() <= headerHeight) {
            $('header').removeClass('sticky');
        }
    }

    // scroll animation
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    $(window).imagesLoaded(function () {
        wow.init();
    });

    // sliders javascript
    // projects slider
    var projectSlider = new Swiper('.project-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        // watchOverflow: true,
        autoplay: {
            delay: 5000,
        },
        //pagination
        pagination: {
            el: '.project-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    })
    // team slider
    var teamSlider = new Swiper('.team-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        // watchOverflow: true,
        autoplay: {
            delay: 5000,
        },
        //pagination
        pagination: {
            el: '.team-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    })
    // testimonial slider
    var testimonialSlider = new Swiper('.testimonial-slider', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        // watchOverflow: true,
        autoplay: {
            delay: 5000,
        },
        //pagination
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
    })

    // update slider width / height on resize
    $(document).on('resize', function () {
        projectSlider.update();
        teamSlider.update();
        testimonialSlider.update();
    })

    function animatecounters() {
        $('.counter').each(count);
        function count(options) {
            $('.counter').countTo();
        }
    }

    // fire function on appear
    $('.counter').appear();
    $(document.body).on('appear', '.counter', function (e) {
        if (!$(this).hasClass('appear')) {
            animatecounters();
            $(this).addClass('appear');
        }
    });
})