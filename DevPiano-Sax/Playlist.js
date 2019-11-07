// // import * as Hammer from "hammerjs";
//
// // export default function RunPlaylist() {
//   function RunPlaylist() {
// window.addEventListener("load", function () {
//
//
//   let leftbutton = document.getElementById("leftbutton");
//   let rightbutton = document.getElementById("rightbutton");
//   // let contBox = document.getElementById("posvideo");
//   let contentlist = document.getElementById("contentList");
//   let contentlistwidth = document.getElementById("contentList").offsetWidth;
//   let blockContentWidth = document.getElementById("txtvideo").offsetWidth;
//   let localBoxForContent = document.getElementById("posvideo").offsetWidth
//
//
//   leftbutton.addEventListener("click" , Getleft);
//   rightbutton.addEventListener("click" , Getright);
//
//   let shiftleft = 0;
//
//   if (document.body.offsetWidth < 576) {
//     contentlistwidth = contentlistwidth + 60;
//   }
//
//   var mc = new Hammer(contentlist);
//
//   mc.on("swipeleft swiperight",function (event) {
//
//       if(event.type === "swipeleft") {
//         Getright ();
//       }
//       else{
//         Getleft();
//       }
//   });
//
//   function Getright() {
//     shiftleft = shiftleft - blockContentWidth - 10;
//     let width = contentlistwidth - localBoxForContent + 10;
//     if(shiftleft <  - width){
//       shiftleft = 0 ;
//     }
//       contentlist.style.left = shiftleft+"px";
//   }
//
//   function Getleft() {
//     shiftleft = shiftleft + blockContentWidth + 10;
//     let width = contentlistwidth - localBoxForContent + 10;
//     if (shiftleft > 0) {
//       shiftleft = - width;
//     }
//     contentlist.style.left = shiftleft + "px";
//   }
//
//
//
// });
// }
// Playlist();

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