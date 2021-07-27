window.addEventListener('load', function (ev) {
    var button = document.getElementById('isShowDescription');
    var descriptionBox = document.getElementById('descriptionBox');
    var contentDescription = document.getElementById('contentDescription')
    var scrollContainer = document.getElementsByClassName('scroll-slide');


    // for (var i=0; i<scrollContainer.length; i++) {
    //     scrollContainer[i].addEventListener('click', function (event) {
    //         event.currentTarget.style.overflowY = "scroll"
    //
    //         console.log(event.currentTarget.style)
    //         event.currentTarget.classList.remove('scroll-slide')
    //     })
    // }



    button.addEventListener('click', function (event) {

        if(descriptionBox.classList.contains('active')) {
            descriptionBox.classList.remove("active");
            descriptionBox.style.height = "120px"
        } else {
            descriptionBox.classList.add('active')
            descriptionBox.style.height = contentDescription.offsetHeight + "px"
        }

    })

});
