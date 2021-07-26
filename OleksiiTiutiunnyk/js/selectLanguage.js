window.addEventListener('load', function (ev) {
    var button = document.getElementById('isShowDescription');
    var descriptionBox = document.getElementById('descriptionBox');

    button.addEventListener('click', function (event) {

        if(descriptionBox.classList.contains('active')) {
            descriptionBox.classList.remove("active");

        } else {
            descriptionBox.classList.add('active')
        }

    })

});