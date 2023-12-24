//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: false,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    navigation: {
        nextEl: ".promo-swiper-button-next",
        prevEl: ".promo-swiper-button-prev",
    },
    pagination: {
      el: '.promo-swiper-pagination',
      clickable: 'true',
    },
});


const complexMarketingSwiper = new Swiper(".complex-marketing-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 1000,
    simulateTouch: false,
    spaceBetween: 30,
    watchOverflow: true,
    watchSlidesProgress: 'true',
    navigation: {
        nextEl: ".complex-marketing-swiper-button-next",
        prevEl: ".complex-marketing-swiper-button-prev",
    },
    pagination: {
      el: '.complex-marketing-swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
        // when window width is >= 1200px
        1500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            simulateTouch: false,
            // autoHeight: false,
        },
        768: {
            slidesPerView: 2.4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            simulateTouch: true,
        },
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },
    },
});

const otherServicesSwiper = new Swiper(".other-services-swiper", {
    speed: 1000,
    simulateTouch: "false",
    watchOverflow: "true",
    pagination: {
        el: ".other-services-swiper-pagination",
        clickable: "true",
    },
    watchSlidesProgress: "true",
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            grid: {
                fill: "row",
                rows: 3,
            },
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            grid: {
                fill: "row",
                rows: 4,
            },
            slidesPerView: 2,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
});


const sliderProjectGalleryThumbs = new Swiper(".slider__thumbs--projectgallery .swiper", {
	direction: "vertical",
	slidesPerView: 4,
	spaceBetween: 60,
	navigation: {
		nextEl: ".slider__thumbs--projectgallery__next",
		prevEl: ".slider__thumbs--projectgallery__prev"
	},
	mousewheel: "true",
	freeMode: "true",
	breakpoints: {
		0: {
			direction: "horizontal",
            spaceBetween: 5,
            slidesPerView: 5,
            mousewheel: "false",
		},
		575: {
            spaceBetween: 10,
            // slidesPerView: 5,
            slidesPerView: 4.5,
			direction: "horizontal",
		},
		768: {
            spaceBetween: 15,
            // slidesPerView: 5,
            slidesPerView: 3.5,
			direction: "vertical",
		},
        992: {
            spaceBetween: 20,
            slidesPerView: 3.5,
			direction: "vertical",
        },
        1200: {
            spaceBetween: 10,
            slidesPerView: 3.7,
        },
        1500: {
            spaceBetween: 10,
            slidesPerView: 3.7,
        },
        1700: {
            spaceBetween: 10,
            slidesPerView: 3.5,
        },
        1921: {
            spaceBetween: 15,
            slidesPerView: 3.4,
        }
	}
});


const sliderProjectGalleryImages = new Swiper('.slider__images--projectgallery .swiper', {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 20,
	mousewheel: false,
	navigation: {
		nextEl: ".slider__next",
		prevEl: ".slider__prev"
	},
	grabCursor: true,
	thumbs: {
		swiper: sliderProjectGalleryThumbs
	},
	breakpoints: {
		0: {
			direction: "horizontal",
		},
		768: {
			direction: "vertical",
		}
	}
});

const feedbackSwiper = new Swiper(".feedback-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 1000,
    simulateTouch: "true",
    spaceBetween: 30,
    watchOverflow: "true",
    centeredSlides: false,
    navigation: {
        nextEl: ".feedback-swiper-button-next",
        prevEl: ".feedback-swiper-button-prev",
    },
    // autoplay: "true",
    pagination: {
      el: ".feedback-swiper-pagination",
      clickable: "true",
      type: "fraction",
    },
    breakpoints: {
        300: {
            centeredSlides: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1200: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        1300: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 15,
            simulateTouch: "true",
        },
        1600: {
            spaceBetween: 20,
        },
    },
});

const clientFeedbackSwiper = new Swiper(".client-feedback-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    pagination: {
      el: '.client-feedback-swiper-pagination',
      clickable: 'true',
    },
});

	//Открытие-закрытие мобильного меню
	let body = document.body;
	let bodyFader = body.querySelector(".fader");
	let hiddenMenu = document.querySelector(".top-menu-wrapper");
	let openMenuButton = document.querySelector(".navbar-toggler");
	let headerModalButton = document.querySelector(".header-modal-button");
	let closeMenuButton = hiddenMenu.querySelector(".close-menu-button");
	let headerMenuItems = hiddenMenu.querySelectorAll(".navbar > ul > li > a");
	let logoWrapper = document.querySelector(".logo-wrapper");

	let showMenuHandler = function () {
		hiddenMenu.classList.toggle("hidden");
		logoWrapper.classList.toggle("hidden");
        headerModalButton.classList.toggle("hidden");
		body.classList.toggle("fixed");
	};

	bodyFader.addEventListener("click", function () {
		showMenuHandler();
		if (!openMenuButton.classList.contains("show")) {
			openMenuButton.classList.add("show");
		}
	});

	openMenuButton.addEventListener("click", function () {
		showMenuHandler();
		if (openMenuButton.classList.contains("show")) {
			openMenuButton.classList.remove("show");
		}
	});

	closeMenuButton.addEventListener("click", function () {
		showMenuHandler();
		if (!openMenuButton.classList.contains("show")) {
			openMenuButton.classList.add("show");
		}
	});

	headerMenuItems.forEach(function (headerMenuItem) {
		headerMenuItem.addEventListener("click", function () {
			if (!headerMenuItem.classList.contains("dropdown-toggle") && !hiddenMenu.classList.contains("hidden")) {
				showMenuHandler();
				if (!openMenuButton.classList.contains("show")) {
					openMenuButton.classList.add("show");
				}
			}
		});
	});


    //Слайдер Лечение
    const therapySwiper = new Swiper(".therapy-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 500,
        // simulateTouch: true,
        spaceBetween: 0,
        watchOverflow: true,
        effect: 'fade',
        navigation: {
            nextEl: ".therapy-swiper-button-next",
            prevEl: ".therapy-swiper-button-prev",
        },
        pagination: {
            el: ".therapy-swiper-pagination",
            // clickable: "true",
        },
    });

    let therapyListItems = document.querySelectorAll(".accordion-therapy .accordion-therapy-link");


    therapyListItems.forEach(function(therapyListItem, index){
        therapyListItem.addEventListener("click", function () {
            if (!therapyListItem.classList.contains('collapsed')) {
                therapySwiper.slideTo(index);
            }
        });
    });

//Параметры для слайдера с врачами
const doctorSwiper = new Swiper(".doctor-swiper", {
	slidesPerView: 3,
	slidesPerGroup: 1,
	speed: 300,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 100,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	// freeMode: {
	// 	enabled: true,
	// 	sticky: true,
	// },
	navigation: {
		nextEl: ".doctor-swiper-button-next",
		prevEl: ".doctor-swiper-button-prev",
	},
	breakpoints: {
		320: {
          slidesPerView: 2,
		  spaceBetween: 15,
		},
		500: {
          slidesPerView: 3,
		  spaceBetween: 15
		},
		768: {
		  slidesPerView: 3,
		  spaceBetween: 20
		},
		992: {
          slidesPerView: 4,
		  spaceBetween: 25
		},
		1200: {
		  slidesPerView: 3,
		  spaceBetween: 20
		},
		1600: {
          slidesPerView: 4,
		  spaceBetween: 20
		},
		1800: {
		  slidesPerView: 4,
		  spaceBetween: 100
		}
	}
});

//Переключение стадий глаукомы по клику на табы
let stagesTabButtons = document.querySelectorAll(".stages-tabs button.nav-link");
let stagesImagesWrapper = document.querySelector(".stages-image");

stagesTabButtons.forEach(button => {
    button.addEventListener('shown.bs.tab', function (event) {
        let buttonStageNumber = button.dataset.stage;
        stagesImagesWrapper.dataset.stage = buttonStageNumber;
    });
});

//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};