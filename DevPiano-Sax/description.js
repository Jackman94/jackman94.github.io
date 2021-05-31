const servicesContainer = document.getElementById('servicesList')
let servicesList = []

fetch('jsonobj/services.json')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        servicesList = data;

        data.forEach((service, i) => {
            const div = document.createElement('a');
            div.classList = 'col-md-6 service-container';
            div.id = service.id;
            div.href = 'http://localhost:63342/Piano-Sax/services.html#'+ service.id;
            if (i % 2 === 0) {
                div.innerHTML = `
                <img src=${service.photo} alt="">
                <div class="service-container_description">
                    <h3 class="service-container_description_title">${service.title}</h3>
                    <p class="service-container_description_body">${service.short_descripton}</p>
                </div>`
            } else {
                div.innerHTML = `
                <div class="service-container_description">
                    <h3 class="service-container_description_title">${service.title}</h3>
                    <p class="service-container_description_body">${service.short_descripton}</p>
                </div>
                <img src=${service.photo} alt="">`
            }
            servicesContainer.appendChild(div);
        })
    });
function openCurrentService(slug) {
    console.log(slug , 'test')
}