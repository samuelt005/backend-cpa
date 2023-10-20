const grafico3 = document.getElementById("grafico3");
const queryUrlGrafico3 =
    queryUrlBase +
    "grafico3%27%5D+%7B%0A++ano%2C%0A++comodo%2C%0A++porcentagem%0A%7D+%0A%7C+order%28ano+asc%29+%7C+order%28comodo+asc%29";

const options3 = {
    scales: {
        x: {
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
            text: "Gráfico 3 - Índice de satisfação com a Infraestutura da instituição.",
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
    },
    indexAxis: "y",
};

let dataObjects3 = [];

function colorForYear(year) {
    const oddColor = "#EB0045";
    const evenColor = "#2a363f";

    return year % 2 === 0 ? evenColor : oddColor;
}

// Função para atribuir os dados do gráfico 3
async function setChartData() {
    try {
        let chartData = await query(queryUrlGrafico3);
        chartData.forEach((data) => {
            dataObjects3.push({
                room: data.comodo,
                year: data.ano,
                percent: data.porcentagem,
            });
        });
    } catch (error) {
        console.log(error);
    }
}

// Função para criar o gráfico 3
async function createChart() {
    await setChartData();

    const rooms = [...new Set(dataObjects3.map((item) => item.room))];
    const years = [...new Set(dataObjects3.map((item) => item.year))];

    const datasets = years.map((year) => {
        const yearData = rooms.map((room) => {
            const roomData = dataObjects3.find(
                (item) => item.room === room && item.year === year
            );
            return roomData ? roomData.percent : 0;
        });

        return {
            label: year,
            data: yearData,
            backgroundColor: colorForYear(year),
        };
    });

    let data3 = {
        labels: rooms.map(String),
        datasets: datasets,
    };

    new Chart(grafico3, {
        type: "bar",
        data: data3,
        options: options3,
    });
}

createChart();
