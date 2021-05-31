window.addEventListener("load", loadGalery);

function loadGalery() {


    function loadPhotoItemsFunc() {

        let swiperWrapper = document.getElementById('swiper-wrapperId');
        let swiperWrapper2 = document.getElementById('swiper-wrapperId2');

        let xhr = new XMLHttpRequest();
        xhr.open("GET", 'jsonobj/photoGalery.json');
        xhr.send();
        xhr.contentType = "json";
        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log(`${xhr.status} : ${xhr.statusText}`)
            } else {
                let res = xhr.response;
                additems(res);
            }
        };

        function additems(res) {

            var obj = JSON.parse(res);

            for (var i = 0; i < obj.length; i++) {

                let div = document.createElement("div");
                div.className = 'swiper-slide';
                div.href = obj[i];

                div.innerHTML = `<figure class="slide-bgimg">
                    <img src="${obj[i]}" class="entity-img" />
                    </figure>`;

                swiperWrapper2.appendChild(div);
                let cloneDiv = div.cloneNode(true);
                swiperWrapper.appendChild(cloneDiv);

            }
            SwiperConfig();
        }
    }

    function SwiperConfig() {
        var swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            spaceBetween: 10,
            slidesPerView: 3,
            // slidesPerColumnFill: 'row',
            // slidesPerColumn: 2,
            // loop: true,
            watchSlidesVisibility: true,
            // watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".mySwiper2", {
            // loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }

    loadPhotoItemsFunc();
}


