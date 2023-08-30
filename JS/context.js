import { mostrarTempo } from "./timer.js";
import { tempoDecorridoEmSegundos } from "../script.js";

// Context
export default function context() {

  const html = document.querySelector('html');
  const focoBt = document.querySelector('.app__card-button--foco');
  const curtoBt = document.querySelector('.app__card-button--curto');
  const longoBt = document.querySelector('.app__card-button--longo');
  const banner = document.querySelector('.app__image');
  const titulo = document.querySelector('.app__title');
  const botoes = document.querySelectorAll('.app__card-button');

  //Eventos de click em cada botão para mudar os contextos.

  botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {     
      botao.classList.add('active');               
      if (indice === 0) {
        tempoDecorridoEmSegundos.valor = 1500;
        alterarContexto('foco');
      } else if (indice === 1) {
        tempoDecorridoEmSegundos.valor = 300;
        alterarContexto('descanso-curto');
      } else if (indice === 2) {
        tempoDecorridoEmSegundos.valor = 900;
        alterarContexto('descanso-longo');
      }

    });
           
  })

  // Função que altera o contexto.
  function alterarContexto(contexto) { 
    mostrarTempo();
    botoes.forEach(function (contexto) {
      contexto.classList.remove('active');
    })

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);

    switch (contexto) {
      case "foco": 
        titulo.innerHTML = `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
        `
        break;

      case "descanso-curto":
        titulo.innerHTML = `
        Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>
        `
        break;

      case "descanso-longo":
        titulo.innerHTML = `
        Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>
        `

      default:
        break;
    }
  }

}
