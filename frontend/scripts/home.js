const imageHomeDiv = document.querySelector(".ImgCapaCPA");
const guidelinesContainer = document.querySelector(".TabsConteudo");
const goalsDescription = document.querySelector(".ConteudoObjetivoTextoConteudo");
const goalsContainer = document.querySelector(".ConteudoObjetivoTextoConteudo");

// Função para obter a imagem do QRCode
async function getQrCodeImage() {
    try {
        let querryResult = await fetch(
            "https://a0mbefrv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27home%27%5D%7B%0A++%22imageUrl%22%3A+qrCode.asset-%3Eurl%0A%7D"
        );
        let resultObject = await querryResult.json();
        let imageUrl = resultObject.result[0].imageUrl;
        return imageUrl;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Função para atribuir a imagem na tag específica
async function setQrCodeImage() {
    try {
        let imageUrl = await getQrCodeImage();
        imageHomeDiv.setAttribute("src", imageUrl);
    } catch (error) {
        console.log(error);
    }
}

// Função para obter os dados das Diretrizes
async function getGuidelines() {
    try {
        let querryResult = await fetch(
            "https://a0mbefrv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27diretrizes%27%5D+%7C+order%28ordem+asc%29"
        );
        let resultObject = await querryResult.json();
        let guidelinesArray = resultObject.result;
        return guidelinesArray;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Função para criar os cards das Diretrizes
async function setGuidelines() {
    try {
        let guidelinesArray = await getGuidelines();
        guidelinesArray.forEach((element) => {
            let card = /*html*/`
            <div class="Card">
                <div class="NumeroCard">0${element.ordem}</div>
                <div class="TextoCard" style="text-align: justify">
                    <div class="TextoTituloCard">
                        ${element.titulo}
                    </div>
                    <div class="TextoConteudoCard">
                        ${element.descricao}
                    </div>
                </div>
            </div>
        `;
        guidelinesContainer.insertAdjacentHTML("beforeend", card);
        });
    } catch (error) {
        console.log(error);
    }
}

async function getGoals() {
    try {
        let querryResult = await fetch(
            "https://a0mbefrv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27objetivos%27%5D"
        );
        let resultObject = await querryResult.json();
        let goalsText = resultObject.result;
        return goalsText;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function setGoals() {
    try {
        let goals = await getGoals();
        goalsDescription.innerText = goals[0].descricao;
        goals[0].itens.forEach((element) => {
            let item = /*html*/ `
                <div class="ConteudoObjetivoTextoListaItem">
                    <div class="bolinha"></div>
                    <div class="ConteudoObjetivoTextoListaItemTopicos">
                        ${element}
                    </div>
                </div>
        `;
            goalsContainer.insertAdjacentHTML("beforeend", item);
        });
    } catch (error) {
        console.log(error);
    }
}

setGoals()
setGuidelines();
setQrCodeImage();
