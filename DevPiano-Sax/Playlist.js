// import * as Hammer from "hammerjs";

// export default function RunPlaylist() {
  function RunPlaylist() {
window.addEventListener("load", function () {


  let leftbutton = document.getElementById("leftbutton");
  let rightbutton = document.getElementById("rightbutton");
  // let contBox = document.getElementById("posvideo");
  let contentlist = document.getElementById("contentList");
  let contentlistwidth = document.getElementById("contentList").offsetWidth;
  let blockContentWidth = document.getElementById("txtvideo").offsetWidth;
  let localBoxForContent = document.getElementById("posvideo").offsetWidth;
  // let videoitems = document.getElementById("txtvideo");

  console.log(setInterval(contentlistwidth,100));
  console.log(contentlistwidth, "contentlistwidth");
    console.log(blockContentWidth, "blockContentWidth");
    console.log(localBoxForContent, "localBoxForContent");


  leftbutton.addEventListener("click" , Getleft);
  rightbutton.addEventListener("click" , Getright);

  let shiftleft = 0;

  var mc = new Hammer(contentlist);

  mc.on("swipeleft swiperight",function (event) {

      if(event.type === "swipeleft") {
        Getright ();
      }
      else{
        Getleft();
      }
  });

  function Getright() {
    shiftleft = shiftleft - blockContentWidth - 10;
    let width = contentlistwidth - localBoxForContent + 10;
    if(shiftleft <  - width){
      shiftleft = 0 ;
    }
    contentlist.style.left = shiftleft+"px";
  }

  function Getleft() {
    shiftleft = shiftleft + blockContentWidth + 10;
    let width = contentlistwidth - localBoxForContent + 10;
    if (shiftleft > 0) {
      shiftleft = - width;
    }
    contentlist.style.left = shiftleft + "px";
  }

});
}
// Playlist();



//  export default class Playlist {
//     constructor() {
//         this.leftbutton = document.getElementById("leftbutton");
//         this.rightbutton = document.getElementById("rightbutton");
//         this.contBox = document.getElementById("posvideo");
//         this.contentlist = document.getElementById("contentList");
//         this.contentlistwidth = document.getElementById("contentList").offsetWidth;
//
//         this.getleft = this.leftbutton.addEventListener("click" , Playlist.Getleft);
//         this.getright = this.rightbutton.addEventListener("click" , Playlist.Getright);
//
//         let shiftleft = 0;
//     }
//
//     Getright() {
//
//       this.shiftleft = this.shiftleft - 150;
//       let width = this.contentlistwidth - 645;
//       if(htis.shiftleft <  - width){
//           this.shiftleft = 0 ;
//       }
//       this.contentlist.style.left = this.shiftleft+"px";
//       console.log(this.shiftleft, 'Getright');
//
//     }
//
//     Getleft() {
//
//         this.shiftleft = this.shiftleft + 150;
//         let width = contentlistwidth - 645;
//         if (this.shiftleft > 0) {
//             this.shiftleft = - width;
//         }
//         this.contentlist.style.left = this.shiftleft + "px";
//         console.log(this.shiftleft, 'Getleft');
//     }
// }
//
// new Playlist();
