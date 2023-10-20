const imageHomeDiv = document.querySelector(".ImgCapaCPA");
const guidelinesContainer = document.querySelector(".TabsConteudo");
const goalsContainer = document.querySelector(".ConteudoObjetivoTextoConteudo");
const goalsDescription = document.querySelector(
    ".ConteudoObjetivoTextoConteudo"
);
const queryUrlQrCodeImage =
    queryUrlBase +
    "home%27%5D%7B%0A++%22imageUrl%22%3A+qrCode.asset-%3Eurl%0A%7D";
const queryUrlGuidelines =
    queryUrlBase +
    "diretrizes%27%5D+%7B%0A++titulo%2C%0A++descricao%2C%0A++ordem%0A%7D%0A%7C+order%28ordem+asc%29";
const queryUrlGoals =
    queryUrlBase +
    "objetivos%27%5D+%7B%0A++descricao%2C%0A++itens%2C%0A%7D";

// Função para atribuir a imagem na tag específica
async function setQrCodeImage() {
    try {
        let queryResult = await query(queryUrlQrCodeImage);
        imageHomeDiv.setAttribute("src", queryResult[0].imageUrl);
    } catch (error) {
        console.log(error);
    }
}

// Função para criar os cards das Diretrizes
async function setGuidelines() {
    try {
        let guidelinesArray = await query(queryUrlGuidelines);
        guidelinesArray.forEach((element) => {
            let card = /*html*/ `
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

// Função para criar os Objetivos
async function setGoals() {
    try {
        let goals = await query(queryUrlGoals);
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

setGoals();
setGuidelines();
setQrCodeImage();
