
function RunPlaylist() {
    new Swiper ('.listVideo-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.posvideo_right-button',
            prevEl: '.posvideo_left-button',
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
