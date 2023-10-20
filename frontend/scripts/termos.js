const statuteContainer = document.querySelector("article#tab1.tabcontent");
const pilarsContainer = document.querySelector("article#tab2.tabcontent");
const queryUrlEstatuto =
    queryUrlBase +
    "estatuto%27%5D+%7B%0A++topico%2C%0A++texto%2C%0A%7D";
const queryUrlPilars =
    queryUrlBase +
    "pilares%27%5D%7B%0A++topico%2C%0A++texto%2C%0A++itens%0A%7D";

// Função para atribuir os tópicos a tag específica
async function setEstatutoCPA() {
    try {
        let statuteArray = await query(queryUrlEstatuto);

        statuteArray.forEach((element) => {
            let card = /*html*/ `
            <h1>${element.topico}</h1>
            <div>
                <p>${element.texto}</p>
            </div>
        `
            statuteContainer.insertAdjacentHTML("beforeend", card);
        });
    } catch (error) {
        console.log(error);
    }
}

// Função para atribuir os pilares a tag específica
async function setPilaresCPA() {
    try {
        let pilarsArray = await query(queryUrlPilars);

        pilarsArray.forEach((element) => {
            let card = /*html*/ `
                <h1>${element.topico}</h1>
                <div>
                    <p>${element.texto}</p>
                    <ol class="lista"></ol>
                </div>
            `;
            pilarsContainer.insertAdjacentHTML("beforeend", card);

            let listDiv = pilarsContainer.querySelector("ol.lista");

            element.itens.forEach((item) => {
                let liElement = /*html*/ `
                    <li>${item}</li>
                `;
                listDiv.insertAdjacentHTML("beforeend", liElement);
            });
        });
    } catch (error) {
        console.log(error);
    }
}


setEstatutoCPA();
setPilaresCPA();