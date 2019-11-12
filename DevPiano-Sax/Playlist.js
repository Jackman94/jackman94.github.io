function RunPlaylist() {
    let videoLiSliderSelector = "listVideo-slider";
    var mySwiper = new Swiper ('.listVideo-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        slidesPerView: 3 ,
        // centeredSlides:true,
        // grabCursor: true,
        // iOSEdgeSwipeDetection:true
    });
}


// RunPlaylist();