let descriptioninlineblock = document.getElementsByClassName("descriptioninlineblock")[0];
let descriptioninlineblockWidth =document.getElementsByClassName("descriptioninlineblock")[0].offsetWidth;
let leftArrowDescription = document.getElementById("leftArrowDescription");
let rightArrowDescription = document.getElementById("rightArrowDescription");
let globbox = document.getElementsByClassName("globbox")[0].offsetWidth;
console.log(globbox,"globbox");
leftArrowDescription.addEventListener("click", leftPush);
rightArrowDescription.addEventListener("click", rightPush);

if (document.body.offsetWidth < 576) {
    descriptioninlineblock.className = "descriptioninlineblock col-10"
}else {
    descriptioninlineblock.className = "descriptioninlineblock"
}

let shiftleftdeck = 0;


function leftPush() {
    shiftleftdeck = shiftleftdeck + globbox -84;
    let widthcontent = 4 * globbox + +10 - (84 * 4);
    if (shiftleftdeck > 0) {
        shiftleftdeck = -widthcontent;
    }
    console.log(shiftleftdeck, "left");
    descriptioninlineblock.style.left = shiftleftdeck + "px";

}

function rightPush() {
    shiftleftdeck = shiftleftdeck - globbox + 84;

    let widthcontent = 4 * globbox + +10 ;
    if (shiftleftdeck < -widthcontent) {
        shiftleftdeck = 0
    }
    console.log(shiftleftdeck, "right");
    descriptioninlineblock.style.left = shiftleftdeck + "px";
}