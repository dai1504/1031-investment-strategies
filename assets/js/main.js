

var swiperBlog = new Swiper('.swiper-blog', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.blog-navigation .next',
        prevEl: '.blog-navigation .prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 30,
        },

    }
})


function spaceTop() {
    var headerH = $('.site-header').height();
    $('.page-wrapper').css('margin-top', headerH)
}
$(document).ready(function(){
    spaceTop()
})

$(window).on('resize', function() {
    spaceTop()
})


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 60, // default
    mobile: true, // default
    live: true // default
})
wow.init();






$('.popup-youtube, .popup-vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});




var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $('.site-header').addClass('scroll-down')
        $('.site-header').removeClass('scroll-up')
        $('.site-header').addClass('has-scroll')
    } else {
        $('.site-header').removeClass('scroll-down')
        $('.site-header').addClass('scroll-up')
    }
    if (st < 30) {
        $('.site-header').removeClass('scroll-down')
        $('.site-header').removeClass('scroll-up')
        $('.site-header').removeClass('has-scroll')
    }
    lastScrollTop = st;
});


$(document).ready(function () {
	$('.site-header-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        // meanExpand: ['<i class="fal fa-plus"></i>'],
    });
});
$('.ham-btn').on('click', function() {
    $('.menu-mobile-container').addClass('open')
    $('.body-overlay').addClass('opened')
})

$(".mobile__close-btn").on('click', function() {
    $('.menu-mobile-container').removeClass('open')
    $('.body-overlay').removeClass('opened')
})

$(".body-overlay").on('click', function() {
    $('.menu-mobile-container').removeClass('open');
    $('.cart-container').removeClass('open');
    $(this).removeClass('opened');
})

$('.cart-btn').on('click', function() {
    $('.cart-container').addClass('open')
    $('.body-overlay').addClass('opened')
})

$(".cart-close").on('click', function() {
    $('.cart-container').removeClass('open')
    $('.body-overlay').removeClass('opened')
})

$("#search-icon").on('click', function() {
    $('.search-box-form').addClass('open')
})

$('.close-search').on('click', function() {
    $('.search-box-form').removeClass('open')
})

$(document).mouseup(function(e)
{
    var container = $(".search-box-form");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass('open');
    }
});


let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500,
    endDelay: 500 });

  tl.add({
    targets: '.loading-container svg',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 500,
    },'0')
    .add({
        targets: '.ld-ic .ld-ic-s',
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 500,
    },'-=200')
    .add({
        targets: '.ld-ic .ld-ic-t',
        scaleY: [0, 1],
        delay: function(el, i) { return i * 50 },
        duration: 2000,
    },'-=500')
    .add({
        targets: '.ld-number *',
        rotateY: [-180, 0],
        duration: 2000,
    },'-=1700')
    .add({
        targets: '.ld-text-top',
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 500,
    },'-=1800')
    .add({
        targets: '.ld-text-bottom',
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 500,
    },'-=1800')
    .add({
        targets: '.ld-text-right',
        opacity: [0, 1],
        translateX: [10, 0],
        duration: 500,
    },'-=1800')
    .add({
        targets: '.ld-text-small *',
        scale: [0.3,1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        // translateX: [10, 0],
        delay: function(el, i) { return i * 20 },
        duration: 600,
    },'-=1800')


    // .add({
    //     targets: '.loading-container svg *',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     easing: 'easeInOutSine',
    //     delay: function(el, i) { return i * 50 },
    //     duration: 1500,
    // },'-=1500')
    // .add({
    //     targets: '.loading-container svg *',
    //     strokeOpacity: [1, 0],
    //     easing: 'easeInOutCubic',
    //     duration: 800
    // },'-=300')
    // .add({
    //     targets: '.loading-container svg *',
    //     fillOpacity: [0, 1],
    //     easing: 'easeInOutCubic',
    //     duration: 1000
    // },'-=1650')

$(document).ready(function() {
	setTimeout(() => {
		$('.loading-container').fadeOut(1000)
	}, 4000);
})


$(".qtybutton").on("click", function() {
    var $qtyButton = $(this);
    var oldValue = $qtyButton.parent().find("input").val();
    if ($qtyButton.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    $qtyButton.parent().find("input").val(newVal);
});



  var swiperOffer = new Swiper(".offer-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    speed: 1500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-new .swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        // clickable: true,
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },

    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
  });

  var $ttSpSliderThumbsSwiper = new Swiper($(".single-product-slider-thumbs").find(".swiper")[0], {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 15,
    preloadImages: false, // Needed for lazy loading
    watchSlidesProgress: true, // Needed for lazy loading (if slidesPerView is "auto" or more than 1)
    speed: 800,
    simulateTouch: true,
    preloadImages: false,

    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true,
    },

    navigation: {
        nextEl: ".sps-arrow-next",
        prevEl: ".sps-arrow-prev",
        disabledClass: "sps-arrow-disabled",
    },

    breakpoints: {
        // When window width is 768px or larger
        768: {
            slidesPerView: 5,
        }
    },
});

var $ttSpSliderTestimonial = new Swiper($(".testimonial-slide").find(".swiper")[0], {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".testimonial-nav .swiper-button-next",
        prevEl: ".testimonial-nav .swiper-button-prev",

    },
});

var $ttSpSliderBlog = new Swiper($(".blog-slide").find(".swiper")[0], {
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 1500,
    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "fraction",
    //     // clickable: true,
    //     formatFractionCurrent: function (number) {
    //         return ('0' + number).slice(-2);
    //     },
    //     formatFractionTotal: function (number) {
    //         return ('0' + number).slice(-2);
    //     },

    // },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".blog-slide .swiper-scrollbar",
        hide: false,
    },
    // breakpoints: {
    //     576: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     992: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     }
    // }
});





// Init Swiper (image slider)
// =============
var $ttSpSliderSwiper = new Swiper($(".single-product-slider").find(".swiper")[0], {
    slidesPerView: 1,
    // effect: "fade",
    spaceBetween: 15,

   // Needed for lazy loading
    speed: 800,
    loop: false, // Do not enable loop! "LightGallery" is not recocnize cloned images.

    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true,
    },

    navigation: {
        nextEl: ".sps-arrow-next",
        prevEl: ".sps-arrow-prev",
        disabledClass: "sps-arrow-disabled",
    },

    thumbs: {
        swiper: $ttSpSliderThumbsSwiper,
    },
});





// =======================================================================================
	// tt-Tabs
	// =======================================================================================

	$(".tt-tabs").each(function() {
		$(this).find(".tt-tab-btn").on("click", function() {

			// Active/deactivate tab buttons
			var $ttTabButton = $(this);
			var $ttTabs = $ttTabButton.parents(".tt-tabs");

			$ttTabs.find(".tt-tab-btn").removeClass("active");
			$ttTabButton.addClass("active");

			// Show/hide tab content
			var $ttTabName = $ttTabButton.attr("data-content-id");

			$ttTabs.find(".tt-tab-content").removeClass("active");
			$ttTabs.find(".tt-tab-content-wrap #" + $ttTabName).addClass("active");

		});
	});


    // ================================================================
	// tt-Accordion
	// ================================================================

	$(".tt-accordion").each(function() {

		// If accordion content has class "is-open"
		$(this).find(".tt-accordion-item").each(function() {
			var $this = $(this);

			if ($this.find(".tt-accordion-content").hasClass("is-open")) {
				$this.addClass("active");
			}
		});

		// Accordion item on click
		$(this).find(".tt-accordion-heading").on("click", function() {
			var $this = $(this);

			if ($this.parents(".tt-accordion-item").hasClass("active")) {
				$this.parents(".tt-accordion-item").removeClass("active");
				$this.next(".tt-accordion-content").slideUp(350);
			} else {
				$this.parent().parent().find(".tt-accordion-item").removeClass("active");
				$this.parent().parent().find(".tt-accordion-content").slideUp(350);
				$this.parents(".tt-accordion-item").toggleClass("active");
				$this.next(".tt-accordion-content").slideToggle(350);
			}
			return false;
		});
	});

    $('.single-product-color').each(function(){
        var $this = $(this);
        var title = $(".product__label span" ,this).text();

        $('.product__color-swatch--sibling-product',this).on('mouseover', function() {
            $(".product__label span" ,$this).html($(this).attr('data-sibling-cutline'));
        })

        $('.product__color-swatches--inner').on('mouseout', function() {
            $(".product__label span" ,$this).html(title);
        })

    })

    var direction = 'vertical';
    var scrollbarClass = 'awd-scrollbar';
    const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('#scrollable'),
        smooth: true,
        getSpeed: true,
        getDirection: true,
        direction: direction,
        // smoothMobile: true,
        lerp: 0.1,
        scrollbarClass: scrollbarClass
    });



    var viewed = false;

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function numberAni() {
        if (isScrolledIntoView($(".count-ani")) && !viewed) {
            // console.log('a')
            viewed = true;



            const convert = str => {
                // Find the number
                let regx = /(\d{1,3})(\d{3}(?:,|$))/;
                // Set a variable
                let currStr;
                // Start loop
                do {
                    // Replace current string, split it
                    currStr = (currStr || str.split(`.`)[0])
                        .replace(regx, `$1,$2`)
                } while (currStr.match(regx)); // Loop

                // Return our result from function
                return (str.split(`.`)[1]) ?
                    currStr.concat(`.`, str.split(`.`)[1]) :
                    currStr;
            };

            function total() {
                let total = 0;
                $('.count').each(function () {
                    let v = parseInt($(this).text());
                    total = v + total
                })
                return total;
            }

            $('.count-ani .__number').each(function () {
                // var num = $(this).text();
                // var num = '34,555';
                // console.log(num);
                // var decimal = 0;
                // if (num.indexOf(".") > 0) { // if number is Decimal
                //     decimal = num.toString().split(".")[1].length;
                // }
                // console.log(decimal);
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                        $(this).text(convert($(this).text()))
                        // $(this).text(parseFloat(now).toFixed(decimal));
                        // $(this).text(Math.round( now * 10 ) / 10);

                        // $(this).text(Math.ceil(now).toLocaleString());
                        // $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    }



    $('.count-ani').each(function () {
        $(window).scroll(numberAni);
    })


    const line = [...document.querySelectorAll('.line--ani')];

    const scroll = () => {
        line.forEach(el => {
            const drop = el.querySelectorAll('.line-drop')
            gsap.set(drop, {
                // xPercent: gsap.utils.random(0, 900),
                top: '-80px',
            })


            gsap.to(drop, {
                // opacity: 0,
                duration: 4,
                top: '100vh',
                yoyo: true,
                stagger: 0.3,
                onComplete(){
                    gsap.set(drop, {
                        // xPercent: gsap.utils.random(0, 900),
                        y: '-0px',
                    })

                    this.restart()
                }
            })

        });


    }


scroll();