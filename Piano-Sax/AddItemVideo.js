export default function AddNewVideo () {
  window.addEventListener('load', loadVideoFunc);
}

function loadVideoFunc() {
  console.log("dich");
  let contentBoxVideo = document.getElementById('contentList');

  let hardcodeVideo = {
    text: "new video for party"
  };

  let div = document.createElement("div");
  div.className = "txtvideo";

  div.innerHTML = "<div> <img src='images/bgpiano.jpg' class=\"txtvideo_img\" alt=\"sax\"></div>"+
                  "<span class=\"txtvideo_txt\"></span>";

  contentBoxVideo.appendChild(div);

}
