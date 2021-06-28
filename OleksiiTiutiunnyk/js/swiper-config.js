window.addEventListener('load', function () {

    new Swiper(".video-container", {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    new Swiper(".shop-container-swiper", {
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
            nextEl: ".shop-next-button",
            prevEl: ".shop-prev-button"
        }
    });
    new Swiper(".album-container-slider", {
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: ".album-next-button",
            prevEl: ".album-prev-button"
        }
    });
});