// import RunPlaylist from "./Playlist";
//
// export default function AddNewVideo () {
//   window.addEventListener('load', loadVideoFunc);
// }

function loadVideoFunc() {

  let contentBoxVideo = document.getElementById('swiper-contentList');

  let xhr = new XMLHttpRequest();
  xhr.open("GET", 'jsonobj/videos.json');
  xhr.send();
  xhr.contentType = "json";
  xhr.onload = function() {
    if (xhr.status != 200){
      console.log(`${xhr.status} : ${xhr.statusText}`)
    }
    else {
      let res = xhr.response;
      additems(res);
    }
  };

  function additems (res) {
    var obj = JSON.parse(res);
    for(var i=0;i<obj.length;i++){

      let div = document.createElement("div");
      div.className = "txtvideo swiper-slide";
      div.id = "txtvideo";
      div.href = obj[i].link;

      div.innerHTML = `<a src = ${obj[i].link} ></a>` + "<img src='"+ obj[i].img + "' class='txtvideo_img' alt='sax'>" +
          "<div class=\"txtvideo_txt\">"  + (obj[i].description) + "</div>";

      contentBoxVideo.appendChild(div);

    }
     RunPlaylist();
  }

  let contentlist = document.getElementById("swiper-contentList");
  let replacementvideo = document.getElementById("replacementvideo");
  contentlist.addEventListener("click", linkclick);

  function linkclick(event) {
    let target = event.target.closest("div");
    let linkvideo = target.href;

    transformLink(linkvideo);
  }

  function transformLink (linkvideo) {
    let splitted = linkvideo.split('watch?v=');
    splitted.splice(1, 0, 'embed/');
    let changedString = splitted.join('');

    if (~changedString.indexOf('&')) {
      changedString = changedString.split('&')[0];
    }

    replacementvideo.src = changedString;
    console.log(changedString);
  }
}


loadVideoFunc();
