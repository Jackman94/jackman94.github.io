function musicContainerSwiperConfig() {
    let musicSwiper = new Swiper('.album-container_description', {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        noSwiping: true,
        noSwipingClass: 'album-container_description',
        loop: true,
    })
    new Swiper(".album-container-slider", {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".album-button-next",
            prevEl: ".album-button-prev"
        },
        thumbs: {
            swiper: musicSwiper,
        },
    });
}

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
    musicContainerSwiperConfig()
});
