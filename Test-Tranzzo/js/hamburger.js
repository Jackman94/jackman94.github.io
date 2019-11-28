window.addEventListener("load", hamburgerLoad);

function hamburgerLoad() {
    let checkboxHamburger = document.getElementById("checkboxHamburger");
    let hamburgerMenu = document.getElementById("hamburgerMenu");

    checkboxHamburger.addEventListener("change" , navMenuHidden);

    function navMenuHidden() {

        if (checkboxHamburger.checked) {
            hamburgerMenu.style.display = "grid";
        }
        else {
            hamburgerMenu.style.display = "none";
        }
    }

}