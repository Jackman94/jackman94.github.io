window.addEventListener('load' , function () {

  let leftbutton = document.getElementById("leftbutton");
  let rightbutton = document.getElementById("rightbutton");
  let contBox = document.getElementById("posvideo");
  let contentlist = document.getElementById("contentList");
  let contentlistwidth = document.getElementById("contentList").offsetWidth;

  let getleft = leftbutton.addEventListener("click" , Getleft);
  let getright = rightbutton.addEventListener("click" , Getright);

  let shiftleft = 0;

  function Getleft() {
    shiftleft = shiftleft - 160;
    if(shiftleft <  - contentlistwidth){
      shiftleft = 0 ;
    }
    contentlist.style.left = shiftleft+"px";
    console.log(shiftleft);
  }
  function Getright() {
    shiftleft = shiftleft + 160;
    if (shiftleft > 0) {
      shiftleft = - contentlistwidth;
    }
    contentlist.style.left = shiftleft + "px";
  }
});
