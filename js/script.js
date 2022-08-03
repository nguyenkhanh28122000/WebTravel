const $ = document.querySelector.bind(document);

const header = $('.header')
const searchBtn = $('.search-icon');
const searchForm = $('.search-form');
const closeIcon = $('#close-icon');
const menuBtn = $('#menu-bar');
const navbar = $('.navbar');
const closeMenu = $('.close-menu__icon');

const app = {
    handleEvent: function () {
        // Mở mục search
        searchBtn.onclick =() =>
            (searchForm.classList.add('active'));
        closeIcon.onclick = () =>
            (searchForm.classList.remove('active'));

        menuBtn.onclick = () => {
            navbar.classList.add('active');
        };

        closeMenu.onclick = () =>
            navbar.classList.remove('active');

        window.onscroll = () => {
            navbar.classList.remove('active');

            if(window.scrollY > 0){
               header.classList.add('active');
            }else{
               header.classList.remove('active');
            }
        }
    },

    handleSlide: function() {
        var swiper1 = new Swiper(".home-slide", {
            loop: true,
            grapCursor: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        });

        var swiper2 = new Swiper(".product-slider", {
            loop: true,
            grapCursor: true,
            spaceBetween: 20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
              },
        });

        var swiper3 = new Swiper(".review-main", {
            loop: true,
            grapCursor: true,
            spaceBetween: 20,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                }
              },
        });

        var swiper4 = new Swiper(".posts-main", {
            loop: true,
            grapCursor: true,
            spaceBetween: 20,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                990: {
                    slidesPerView: 3,
                }
              },
        });

        var swiper5 = new Swiper(".sponsor-main", {
            loop: true,
            grapCursor: true,
            spaceBetween: 20,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                450: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                990: {
                    slidesPerView: 4,
                }
              },
        });
    }, 

    start: function () {
        this.handleEvent()

        this.handleSlide()
    }
}

app.start();