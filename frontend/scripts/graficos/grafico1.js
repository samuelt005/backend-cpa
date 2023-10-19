const grafico1 = document.getElementById("grafico1");

const options1 = {
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
            text: "Gráfico 1 - Índice de satisfação dos cursos ofertados pela instituição.",
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

let dataObjects1 = [];

// Função para os dados do gráfico 1
async function getChartData() {
    try {
        let querryResult = await fetch(
            "https://a0mbefrv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27grafico1%27%5D"
        );
        let resultObject = await querryResult.json();
        let chartData = resultObject.result;
        return chartData;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Função para atribuir os dados do gráfico 1
async function setChartData() {
    try {
        let chartData = await getChartData();
        chartData.forEach((data) => {
            dataObjects1.push({
                course: data.curso,
                year: data.ano,
                percent: data.porcentagem,
            });
        });
        dataObjects1.sort((a, b) => {
            if (a.course < b.course) return -1;
            if (a.course > b.course) return 1;

            if (a.year < b.year) return -1;
            if (a.year > b.year) return 1;
        });
        console.log(dataObjects1);
    } catch (error) {
        console.log(error);
    }
}

// Função para criar o gráfico 1
async function createChart() {
    await setChartData();

    const courses = [...new Set(dataObjects1.map((item) => item.course))];
    const years = [...new Set(dataObjects1.map((item) => item.year))];

    const datasets = years.map((year) => {
        const yearData = courses.map((course) => {
            const courseData = dataObjects1.find(
                (item) => item.course === course && item.year === year
            );
            return courseData ? courseData.percent : 0;
        });

        return {
            label: year,
            data: yearData,
            backgroundColor: colorForYear(year),
        };
    });

    let data1 = {
        labels: courses.map(String),
        datasets: datasets,
    };

    new Chart(grafico1, {
        type: "bar",
        data: data1,
        options: options1,
    });
}

createChart();
