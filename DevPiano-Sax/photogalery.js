window.addEventListener("load", loadGalery);

function loadGalery() {
    let leftPhotoGalery = document.getElementById("leftPhotoGalery");
    let rightPhotoGalery = document.getElementById("rightPhotoGalery");
    let mainPictureGallery = document.getElementById("mainPictureGallery");

    leftPhotoGalery.addEventListener("click", moveImageLeft);
    rightPhotoGalery.addEventListener("click", moveImageRight);

    let arr =
        [
            "http://www.lumiere-mag.ru/wp-content/uploads/2017/05/the_pianist_cover.jpg",
            "https://34.ua/uploads/696x391_DIR/imported_news/2014/04/b08f1fcfb15b7407f0611fd078a7170940097c6e.jpg",
            "https://ponominalu.ru/media/in/640x342/91fe18426d8e00852bfef12c24213b862d672913.jpg",
            "http://www.lumiere-mag.ru/wp-content/uploads/2017/05/the_pianist_cover.jpg",
            "https://34.ua/uploads/696x391_DIR/imported_news/2014/04/b08f1fcfb15b7407f0611fd078a7170940097c6e.jpg",
            "https://ponominalu.ru/media/in/640x342/91fe18426d8e00852bfef12c24213b862d672913.jpg"
        ];

    function moveImageLeft() {
        mainPictureGallery.src = "http://www.lumiere-mag.ru/wp-content/uploads/2017/05/the_pianist_cover.jpg"
    }

    function moveImageRight() {
        arr.reduce(function (accumulator, currentValue, index, array) {
        // console.log(accumulator, "accumulator");
        // console.log(currentValue, "currentValue");
        // console.log(index, "index");
        // console.log(array, "array");
            let value = currentValue;
            let acc = currentValue;
            console.log(acc);
            addPicture(acc);
        });
        function addPicture(acc) {
            mainPictureGallery.src = acc;
        }
        // mainPictureGallery.src = "https://34.ua/uploads/696x391_DIR/imported_news/2014/04/b08f1fcfb15b7407f0611fd078a7170940097c6e.jpg"
    }


}