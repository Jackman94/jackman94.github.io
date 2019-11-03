window.addEventListener("load", loadGalery);
//
// function loadGalery() {
//     let leftPhotoGalery = document.getElementById("leftPhotoGalery");
//     let rightPhotoGalery = document.getElementById("rightPhotoGalery");
//     let mainPictureGallery = document.getElementById("mainPictureGallery");
//     let galleryBlock = document.getElementById("galleryBlock");
//     let photoBox =document.getElementsByClassName("photobox")[0];
//
//     leftPhotoGalery.addEventListener("click", moveImageLeft);
//     rightPhotoGalery.addEventListener("click", moveImageRight);
//     galleryBlock.addEventListener("click", clickPhoto);
//
//     let arr =
//         [
//             "./images/13957996_1819867424913757_2536908119237949828_o.jpg",
//             "./images/54434912_2219933258121974_366147302013796352_n.jpg",
//             "./images/IMG_4683-2.jpg",
//             "./images/IMG_4684-2.jpg",
//             "./images/IMG_4688-2.jpg",
//             "./images/IMG_4692-2.jpg",
//             "./images/IMG_4803-2.jpg",
//             "./images/ol10998369.jpg",
//             "./images/ol10998370.jpg",
//             "./images/ol10998371.jpg",
//             "./images/ol11013439.jpg",
//             "./images/ol11013440.jpg",
//             "./images/ol11049928.jpg",
//             "./images/ol11049929.jpg",
//             "./images/ol11049930.jpg" ,
//             "./images/ol11050121.jpg" ,
//             "./images/PRyJg654tbA.jpg" ,
//         ];
//     console.log(arr, "array private");
//
//     // let xhr = new XMLHttpRequest();
//     // xhr.open("GET", 'jsonobj/photoGalery.json');
//     // xhr.send();
//     // xhr.contentType = "json";
//     // xhr.onload = function() {
//     //     if (xhr.status != 200){
//     //         console.log(`${xhr.status} : ${xhr.statusText}`)
//     //     }
//     //     else {
//     //         let res = xhr.response;
//     //         let arr = JSON.parse(res);
//     //         console.log(res,"res");
//     //         console.log(arr, "arr");
//     //         moveImageLeft(arr);
//     //         moveImageRight(arr)
//     //
//     //     }
//     // };
//
//
//     var mc = new Hammer(photoBox);
//
//     mc.on("swipeleft swiperight",function (event) {
//
//         if(event.type === "swipeleft") {
//             moveImageRight ();
//         }
//         else{
//             moveImageLeft();
//         }
//     });
//
//     let res = null;
//
//     function moveImageLeft() {
//         console.log(arr , "arrr inmoveImageLeft");
//         var revert = arr.reverse();
//
//         for (let i = 0; i <revert.length; i++){
//
//             if(arr[i] === res) {
//                 arr.push(arr[i]);
//                 arr.shift();
//             }
//
//             if(revert[i] ) {
//                 res = mainPictureGallery.src = revert[i];
//                 revert.push(revert[i]);
//                 revert.shift();
//                 break;
//             }
//         }
//         revert.reverse();
//
//     }
//
//
//     function moveImageRight() {
//         for (let i = 0; i <arr.length; i++){
//
//             if(arr[i] === res) {
//                 arr.push(arr[i]);
//                 arr.shift();
//             }
//
//             if(arr[i]) {
//                 res = mainPictureGallery.src = arr[i];
//                 arr.push(arr[i]);
//                 arr.shift();
//                 break;
//             }
//         }
//     }
//
//     function clickPhoto(event) {
//         if (event.target.tagName === 'IMG') {
//             let target = event.target;
//             let imgTarget = target.src;
//             mainPictureGallery.src = imgTarget;
//         }
//     }
// }
//


function loadGalery() {


    function loadPhotoItemsFunc() {

        let swiperWrapper = document.getElementsByClassName('swiper-wrapper')[0];
        let swiperWrapper2 = document.getElementsByClassName('swiper-wrapper')[1];

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
            loopAdditionalSlides: 10,
            speed: 1000,
            spaceBetween: 5,
            slidesPerView: 5,
            centeredSlides: true,
            touchRatio: 0.2,
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


