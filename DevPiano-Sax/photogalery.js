window.addEventListener("load", loadGalery);

function loadGalery() {
    let leftPhotoGalery = document.getElementById("leftPhotoGalery");
    let rightPhotoGalery = document.getElementById("rightPhotoGalery");
    let mainPictureGallery = document.getElementById("mainPictureGallery");
    let galleryBlock = document.getElementById("galleryBlock");
    let photoBox =document.getElementsByClassName("photobox")[0];

    leftPhotoGalery.addEventListener("click", moveImageLeft);
    rightPhotoGalery.addEventListener("click", moveImageRight);
    galleryBlock.addEventListener("click", clickPhoto);

    let arr =
        [
            "http://www.lumiere-mag.ru/wp-content/uploads/2017/05/the_pianist_cover.jpg",
            "https://34.ua/uploads/696x391_DIR/imported_news/2014/04/b08f1fcfb15b7407f0611fd078a7170940097c6e.jpg",
            "https://ponominalu.ru/media/in/640x342/91fe18426d8e00852bfef12c24213b862d672913.jpg",
            "http://www.lumiere-mag.ru/wp-content/uploads/2017/05/the_pianist_cover.jpg",
            "https://34.ua/uploads/696x391_DIR/imported_news/2014/04/b08f1fcfb15b7407f0611fd078a7170940097c6e.jpg",
            "https://ponominalu.ru/media/in/640x342/91fe18426d8e00852bfef12c24213b862d672913.jpg",
            "https://i.pinimg.com/originals/e1/31/ab/e131ab5cddb75417d7e43fd6b838a332.jpg",
            "https://i.pinimg.com/originals/0a/70/f3/0a70f3070112506446873a30e5911c1c.jpg",
            "https://pro-prikoly.club/wp-content/uploads/2019/07/0-33.jpg",
            "http://steshka.ru/wp-content/uploads/2015/02/cifra_4_9.jpg",
            "http://rukadelkino.ru/uploads/posts/2016-03/thumbs/1457418118_2-g.jpg",
            "https://ja-rastu.ru/uploads/posts/2013-04/1367310704_shest.gif",
            "https://i.pinimg.com/originals/26/ba/10/26ba105d7a933be46940c9e943a3064d.jpg",
            "http://zabavnik.club/wp-content/uploads/cifra_8_1_01074502.jpg",
            "https://i.pinimg.com/originals/a7/74/ca/a774ca5d1e5d23dd30f618ffb477159d.jpg" ,
        ];
    console.log(arr, "array private");

    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", 'jsonobj/photoGalery.json');
    // xhr.send();
    // xhr.contentType = "json";
    // xhr.onload = function() {
    //     if (xhr.status != 200){
    //         console.log(`${xhr.status} : ${xhr.statusText}`)
    //     }
    //     else {
    //         let res = xhr.response;
    //         let arr = JSON.parse(res);
    //         console.log(res,"res");
    //         console.log(arr, "arr");
    //         moveImageLeft(arr);
    //         moveImageRight(arr)
    //
    //     }
    // };


    var mc = new Hammer(photoBox);

    mc.on("swipeleft swiperight",function (event) {

        if(event.type === "swipeleft") {
            moveImageRight ();
        }
        else{
            moveImageLeft();
        }
    });

    let res = null;

    function moveImageLeft() {
        console.log(arr , "arrr inmoveImageLeft");
        var revert = arr.reverse();

        for (let i = 0; i <revert.length; i++){

            if(arr[i] === res) {
                arr.push(arr[i]);
                arr.shift();
            }

            if(revert[i] ) {
                res = mainPictureGallery.src = revert[i];
                revert.push(revert[i]);
                revert.shift();
                break;
            }
        }
        revert.reverse();

    }


    function moveImageRight() {
        for (let i = 0; i <arr.length; i++){

            if(arr[i] === res) {
                arr.push(arr[i]);
                arr.shift();
            }

            if(arr[i]) {
                res = mainPictureGallery.src = arr[i];
                arr.push(arr[i]);
                arr.shift();
                break;
            }
        }
    }

    function clickPhoto(event) {
        if (event.target.tagName === 'IMG') {
            let target = event.target;
            let imgTarget = target.src;
            mainPictureGallery.src = imgTarget;
        }
    }
}