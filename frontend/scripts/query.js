const queryUrlBase =
    "https://a0mbefrv.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27";
    
// Função para executar querys
async function query(url) {
    try {
        const queryResult = (await (await fetch(url)).json()).result;
        return queryResult;
    } catch (error) {
        console.error(error);
        throw error;
    }
}