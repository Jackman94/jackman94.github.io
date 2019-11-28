window.addEventListener("load", loadForm);

function loadForm() {
    let currencyExchange = document.getElementById("currencyExchange");
    let sendImageSelect = document.getElementById("sendingSelectImg");
    let sendTextSelect = document.getElementById("sendingSelectText");
    let getImageSelect = document.getElementById("gettingSelectImg");
    let getTextSelect = document.getElementById("gettingSelectText");
    let gettingList = document.getElementById("gettingList");
    let closeGetSelect = document.getElementById("closeGetting");
    let sendingList = document.getElementById("sendingList");
    let closeSendSelect = document.getElementById("closeSending");

    closeGetSelect.addEventListener("click",  open_closeGettingSelect);
    closeSendSelect.addEventListener("click", open_closeSendingSelect);
    sendingList.addEventListener("click" , defaultSendState);
    gettingList.addEventListener("click" , defaultGetState);

    let bitcoin = [
        {
            "name" : "bitcoin BTC",
            "image": "./img/bitcoin@3x.png"
        },
        {
            "name" : "bitcoin BTC1",
            "image": "./img/bitcoin@3x.png"
        },
        {
            "name" : "bitcoin BTC2",
            "image": "./img/bitcoin@3x.png"
        },
    ];


    currencyExchange.addEventListener("click" , function (event){
        let elemTarget = event.target.closest("div");

        switch (elemTarget.id) {
            case "bitcoin-dolar":
                let dolar  = [
                    {
                        "name" : "Visa/Mastercard UAH",
                        "image": "./img/card@3x.png",
                    },
                    {
                        "name" : "Visa/Mastercard UAH1",
                        "image": "./img/card@3x.png",
                    },
                    {
                        "name" : "Visa/Mastercard UAH2",
                        "image": "./img/card@3x.png",
                    }
                ];

                changeValue(dolar);
                generateGetList(dolar);
                generateSendList(dolar);
            break;
            case "bitcoin-ethereum":
                let ethereum = [
                    {
                        "name" : "Ethereum ETH",
                        "image": "./img/etherium@3x.png",
                    },
                    {
                        "name" : "Ethereum ETH1",
                        "image": "./img/etherium@3x.png",
                    },
                    {
                        "name" : "Ethereum ETH2",
                        "image": "./img/etherium@3x.png",
                    },
                ];
                changeValue(ethereum);
                generateGetList(ethereum);
                generateSendList();
            break;
            case "bitcoin-advcash":
                let advcash = [
                    {
                        "name" : "Advcash ADV",
                        "image": "./img/advcash@3x.png",
                    },
                    {
                        "name" : "Advcash ADV1",
                        "image": "./img/advcash@3x.png",
                    },
                    {
                        "name" : "Advcash ADV2",
                        "image": "./img/advcash@3x.png",
                    },
                ];

                changeValue(advcash);
                generateGetList(advcash);
                generateSendList()
            break;
            default:
                console.log("boom")
        }

        function changeValue(currency) {
            let currencyName = currency[0].name;
            let currencyImage = currency[0].image;

            getTextSelect.innerHTML = currencyName;
            getImageSelect.src = currencyImage;

            let bitcoinName = bitcoin[0].name;
            let bitcoinImage = bitcoin[0].image;

            sendTextSelect.innerHTML = bitcoinName;
            sendImageSelect.src = bitcoinImage;
        }
    });

    function open_closeGettingSelect(event) {
        let open = event.target.closest("div");
        if (open.id === "gettingSelect"){
            open.id = "gettingClose";
            gettingList.style.visibility = "visible";
        }
        else if (open.id === "gettingClose") {
            open.id = "gettingSelect";
            gettingList.style.visibility = "hidden";
        }
    }

    function open_closeSendingSelect(event) {
        let open = event.target.closest("div");
        if (open.id === "sendingSelect"){
            open.id = "sendingClose";
            sendingList.style.visibility = "visible";
        }
        else if (open.id === "sendingClose") {
            open.id = "sendingSelect";
            sendingList.style.visibility = "hidden";
        }
    }

    function generateGetList(list) {
        gettingList.innerHTML = "";
        list.forEach( (item)=> {

            let div = document.createElement("div");
            div.className = "cachBox";
            div.innerHTML = `<img src="${item.image}" alt="sorry" class="cachBoxImg">`+ `<span class="cachBoxName">${item.name}</span>`;
            gettingList.append(div);
        });
    }
    function generateSendList() {
        sendingList.innerHTML = "";
        bitcoin.forEach( (item)=> {

            let div = document.createElement("div");
            div.className = "cachBox";
            div.innerHTML = `<img src="${item.image}" alt="sorry" class="cachBoxImg">`+ `<span class="cachBoxName">${item.name}</span>`;
            sendingList.append(div);
        });
    }

    function defaultSendState(event) {
        let state = event.target;

        if (state.className === "cachBox") {

            let cachBox = event.target;
            let imgBox = cachBox.querySelector('.cachBoxImg');
            let nameBox = cachBox.querySelector('.cachBoxName');
            sendImageSelect.src = imgBox.src;
            sendTextSelect.innerHTML = nameBox.textContent;
        }
        sendingList.style.visibility = "hidden"
    }

    function defaultGetState(event) {
        let getState = event.target;

        if (getState.className === "cachBox") {

            let cachBox = event.target;
            let imgBox = cachBox.querySelector('.cachBoxImg');
            let nameBox = cachBox.querySelector('.cachBoxName');
            getImageSelect.src = imgBox.src;
            getTextSelect.innerHTML = nameBox.textContent;
        }
        gettingList.style.visibility = "hidden"
    }
}
