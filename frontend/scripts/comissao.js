const figureImgDiretor = document.getElementById('imagemDiretor');
const queryUrlMembers =
	queryUrlBase +
	'membros%27%5D+%7B%0A++nome%2C%0A++destaque%2C%0A++subtitulo%2C%0A++cargo%2C%0A++%22imageUrl%22%3A+imagem.asset-%3Eurl%2C%0A++bio%2C%0A++titulo%0A%7D+%7C+order%28nome+asc%29+%7C+order%28destaque+asc%29+';
const ulSlider = document.querySelector('.slider-container');

async function setDataCoord() {
	try {
		let queryResult = await query(queryUrlMembers);
		console.log(queryResult);
		let destaque = queryResult.find((element) => element.destaque);
		const divDiretor = /*html*/ `
      <img src=${destaque.imageUrl} alt="pr-sample1" />
      <figcaption>
        <h3>
          ${destaque.nome}
          </span>
        </h3>
        <h4>
          ${destaque.cargo}
        </h4>
      </figcaption>
    `;

		figureImgDiretor.insertAdjacentHTML('beforeend', divDiretor);
	} catch (error) {
		console.log(error);
	}
}

async function setMembros() {
	try {
		let queryResult = await query(queryUrlMembers);
		queryResult.forEach((element) => {
			let slide = /*html*/ `
        <li>
          <div id="members" class="participantes">
              <div class="Colunm-1">
                  <figure class="snip1113 red">
                      <img src=${element.imageUrl} alt="pr-sample1" />
                      <figcaption>
                          <h3><span>${element.nome}</span></h3>
                          <h4>
                              ${element.cargo}
                          </h4>
                      </figcaption>
                  </figure>
              </div>
              <div class="Colunm-2">
                  <div class="ConteudoPontosTextoSubT">
                      ${element.subtitulo}
                  </div>

                  <div
                      class="ComissaoSection1ConteudoDireitaTit ComissaoSection1DiretorConteudoTit">
                     ${element.titulo}
                  </div>

                  <div
                      class="ComissaoSection1ConteudoEsquerda ComissaoSection1DiretorConteudoSub">
                     ${element.bio}
                  </div>
              </div>
          </div>
        </li>
      `;

			ulSlider.insertAdjacentHTML('beforeend', slide);
		});
	} catch (error) {
		console.log(error);
	}
}

setDataCoord();
setMembros();
