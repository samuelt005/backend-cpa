const grafico2 = document.getElementById("grafico2");

const options2 = {
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                format: {
                    style: "percent",
                },
            },
        },
    },
    plugins: {
        title: {
            display: true,
            text: "Gráfico 2 - Índice de satisfação com a Instituição Biopark.",
            padding: {
                top: 10,
                bottom: 20,
            },
            font: {
                size: 16,
                family: "Lexend Deca",
                weight: 500,
            },
            color: "#212529",
        },
        legend: {
            display: false,
        },
    },
};

let labelArray2 = [];
let dataArray2 = [];
let data2 = {
    labels: labelArray2,
    datasets: [
        {
            data: dataArray2,
            borderWidth: 0,
            backgroundColor: ["#EB0045", "#2a363f"],
            barPercentage: 0.5,
            categoryPercentage: 1,
        },
    ],
};

// Função para os dados do gráfico 2
async function getChartData() {
    try {
        let querryResult = await fetch(
            "https://a0mbefrv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27grafico2%27%5D"
        );
        let resultObject = await querryResult.json();
        let chartData = resultObject.result;
        return chartData;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Função para atribuir os dados do gráfico 2
async function setChartData() {
    try {
        let chartData = await getChartData();
        chartData.forEach((data) => {
            let labelData = data.ano.toString();
            let graphData = data.porcentagem.toString();
            labelArray2.unshift(labelData);
            dataArray2.unshift(graphData);
        });
    } catch (error) {
        console.log(error);
    }
}

// Função para criar o gráfico 2
async function createChart() {
    await setChartData();
    new Chart(grafico2, {
        type: "bar",
        data: data2,
        options: options2,
    });
}

createChart();
