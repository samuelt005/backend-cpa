const badgeSpanArray = document.querySelectorAll(".badge");
const faqContainer = document.querySelector(".faq");
const queryUrl =
    queryUrlBase +
    "faq%27%5D+%7B%0A++ordem%2C%0A++pergunta%2C%0A++resposta%2C%0A%7D+%7C+order%28ordem+asc%29";

// Função para criar os cards das Perguntas e Respostas
async function setQuestions() {
    try {
        let questionsArray = await query(queryUrl);
        questionsArray.forEach((question) => {
            let faqHeadingId = "faqHeading-" + question.ordem;
            let faqCollapseId = "faqCollapse-" + question.ordem;
            let faqCollapseTarget = "#faqCollapse-" + question.ordem;
            let cardQuestion = /*html*/ `
            <div class="card">
                <div class="card-header" id=${faqHeadingId}>
                    <div class="mb-0">
                        <h5
                            class="faq-title"
                            data-toggle="collapse"
                            data-target=${faqCollapseTarget}
                            data-aria-expanded="false"
                            data-aria-controls=${faqCollapseId}>
                        >
                            <span class="badge">${question.ordem}</span>
                            ${question.pergunta}
                        </h5>
                    </div>
                </div>
                <div
                    id=${faqCollapseId}
                    class="collapse"
                    aria-labelledby=${faqHeadingId}
                    data-parent="#accordion"
                >
                    <div class="card-body">
                        <p>
                            ${question.resposta}
                        </p>
                    </div>
                </div>
            </div>
            `;
            faqContainer.insertAdjacentHTML("beforeend", cardQuestion);
        });
    } catch (error) {
        console.log(error);
    }
}

setQuestions();
