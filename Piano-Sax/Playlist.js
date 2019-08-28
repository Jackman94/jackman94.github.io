export default function Playlist() {
window.addEventListener("load", function () {


  let leftbutton = document.getElementById("leftbutton");
  let rightbutton = document.getElementById("rightbutton");
  // let contBox = document.getElementById("posvideo");
  let contentlist = document.getElementById("contentList");
  let contentlistwidth = document.getElementById("contentList").offsetWidth;

  let getleft = leftbutton.addEventListener("click" , Getleft);
  let getright = rightbutton.addEventListener("click" , Getright);

  let shiftleft = 0;


  function Getright() {
    shiftleft = shiftleft - 150;
    let width = contentlistwidth - 645;
    if(shiftleft <  - width){
      shiftleft = 0 ;
    }
    contentlist.style.left = shiftleft+"px";
    console.log(shiftleft, 'Getright');
  }

  function Getleft() {
    shiftleft = shiftleft + 150;
    let width = contentlistwidth - 645;
    if (shiftleft > 0) {
      shiftleft = - width;
    }
    contentlist.style.left = shiftleft + "px";
    console.log(shiftleft, 'Getleft');
  }

});
}



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
