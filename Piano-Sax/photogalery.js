window.addEventListener("load", loadGalery);

function loadGalery() {


    function loadPhotoItemsFunc() {

        let swiperWrapper = document.getElementById('swiper-wrapperId');
        let swiperWrapper2 = document.getElementById('swiper-wrapperId2');

        let xhr = new XMLHttpRequest();
        xhr.open("GET", 'jsonobj/photoGalery.json');
        xhr.send();
        xhr.contentType = "json";
        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log(`${xhr.status} : ${xhr.statusText}`)
            } else {
                let res = xhr.response;
                additems(res);
            }
        };

        function additems(res) {

            var obj = JSON.parse(res);

            for (var i = 0; i < obj.length; i++) {

                let div = document.createElement("div");
                div.className = 'swiper-slide';
                div.href = obj[i];

                div.innerHTML = `<figure class="slide-bgimg" style="background-image:url('${obj[i]}')">` +
                    '<img src=\'"+ obj[i] + "\' class="entity-img" />' +
                    '</figure>';

                swiperWrapper2.appendChild(div);
                let cloneDiv = div.cloneNode(true);
                swiperWrapper.appendChild(cloneDiv);

            }
            SwiperLogik();
        }
    }

    function SwiperLogik() {
// Params
        let mainSliderSelector = '.main-slider',
            navSliderSelector = '.nav-slider',
            interleaveOffset = 0.3;

// Main Slider
        let mainSliderOptions = {
            loop: true,
            speed: 900,
            autoplay: {
                delay: 3000
            },
            iOSEdgeSwipeDetection:true,
            loopAdditionalSlides: 1000,
            grabCursor: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                init: function () {
                    this.autoplay.stop();
                },
                imagesReady: function () {
                    this.el.classList.remove('loading');
                    this.autoplay.start();
                },
                progress: function () {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        let slideProgress = swiper.slides[i].progress,
                            innerOffset = swiper.width * interleaveOffset,
                            innerTranslate = slideProgress * innerOffset;

                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                            "translateX(" + innerTranslate + "px)";
                    }
                },
                touchStart: function () {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                },
                setTransition: function (speed) {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                            speed + "ms";
                    }
                }
            }
        };

        let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
        let navSliderOptions = {
            loop: true,
            loopAdditionalSlides: 20,
            speed: 1000,
            spaceBetween: 5,
            slidesPerView: 5,
            centeredSlides: true,
            touchRatio: 1,
            slideToClickedSlide: true,
            direction: 'vertical',
            on: {
                imagesReady: function () {
                    this.el.classList.remove('loading');
                },
                click: function () {
                    mainSlider.autoplay.stop();
                }
            }
        };
        let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
        mainSlider.controller.control = navSlider;
        navSlider.controller.control = mainSlider;

    }

    loadPhotoItemsFunc();
}


