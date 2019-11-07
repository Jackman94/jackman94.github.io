document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

window.addEventListener("load", loadWhatwedo);

   function loadWhatwedo () {
    let descriptioninlineblock = document.getElementsByClassName("descriptioninlineblock")[0];
    let whatWeDo = document.getElementById("whatWeDo");
    let buttonWhatwedo = document.getElementById("leftArrowDescription").offsetWidth;
    let leftArrowDescription = document.getElementById("leftArrowDescription");
    let rightArrowDescription = document.getElementById("rightArrowDescription");
    let globbox = document.getElementsByClassName("globbox")[0].offsetWidth;

    leftArrowDescription.addEventListener("click", leftPush);
    rightArrowDescription.addEventListener("click", rightPush);

    if (document.body.offsetWidth < 576) {
        descriptioninlineblock.className = "descriptioninlineblock col-10"
    } else {
        descriptioninlineblock.className = "descriptioninlineblock"
    }

    let shiftleftdeck = 0;
    let boxwidth = globbox - (2 * buttonWhatwedo) - 22;
    let widthcontent = 3 * boxwidth;


       var mc = new Hammer(whatWeDo);

       mc.on("swipeleft swiperight",function (event) {

           if(event.type === "swipeleft" && document.body.offsetWidth <= 576) {
               rightPush ();
           }
           else if (document.body.offsetWidth <= 576){
               leftPush();
           }
       });


    function leftPush() {
        shiftleftdeck = shiftleftdeck + boxwidth;

        if (shiftleftdeck > 0) {
            shiftleftdeck = -widthcontent;
        }
        descriptioninlineblock.style.left = shiftleftdeck + "px";

    }

    function rightPush() {
        shiftleftdeck = shiftleftdeck - boxwidth;

        if (shiftleftdeck < -widthcontent) {
            shiftleftdeck = 0
        }
        descriptioninlineblock.style.left = shiftleftdeck + "px";
    }
}