let popUp = document.getElementById("popUp");
let closePopUp = document.getElementById("closePopUp");
let buttonAbUs = document.getElementById("button-ab-us");
let backgroundPopUp = document.getElementById("backgroundPopUp");

buttonAbUs.addEventListener("click", popUpOpen);
closePopUp.addEventListener("click", popUpClose);

console.log(popUp);
console.log(backgroundPopUp);


function popUpOpen() {
    popUp.style.visibility = "visible";
    backgroundPopUp.style.backgroundColor = "rgba(0,0,0,0.8)";
    backgroundPopUp.style.zIndex = "99999";
    console.log(backgroundPopUp)
}

function popUpClose() {
    popUp.style.visibility = "hidden";
    backgroundPopUp.style.backgroundColor = "";
    backgroundPopUp.style.zIndex = "";
}