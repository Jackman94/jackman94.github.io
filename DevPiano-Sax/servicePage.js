window.addEventListener('load', function () {
    const urlParam = location.hash.replace('#', '')
    const serviceContent = document.getElementById('serviceContent')

    fetch('jsonobj/services.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            data.forEach((service) => {
                if (service.id === urlParam) {
                    const div = document.createElement('div')
                    div.classList = 'row currentServiceContainer';
                    div.innerHTML = `
                        <h1 class="col-12">${service.title}</h1>

                        <div class="col-md-6 currentServiceContainer_image">
                            <img src=${service.photo} alt="">
                        </div>
                        <div class="col-md-6">
                            <div class="currentServiceContainer_description">
                            <h3 class="currentServiceContainer_description_title">${service.title}</h3>
                            <p class="">${service.full_description}</p>
                    
                            <p class="service-container_description_body">
                                цена колебриться от 5000грн , у нас большой спектор услуг
                            </p>
                        </div>
                    </div>
                    `
                    serviceContent.appendChild(div)
                }
            })
        })

})
