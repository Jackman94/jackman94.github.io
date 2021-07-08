// window.addEventListener('load', function () {
//     const musicContainer  = document.getElementById('musicContainer')
//     const imageContainer  = document.getElementById('imageContainer')
//
//     fetch('hardcode-data/albums.json').then((response) => {
//         return response.json()
//     }).then((res) => {
//       const singleList = res.albums[0];
//
//         singleList.singles.forEach((single) => {
//             console.log('single', single)
//             imageContainer.innerHTML =
//                 `
//                     <div class="swiper-slide">
//                         <img class="w-100" src="${single.icon}" alt="">
//                     </div>
//                 `
//
//         })
//
//
//
//
//
//         console.log(res, 'response')
//         musicContainerSwiperConfig()
//     })
// })
