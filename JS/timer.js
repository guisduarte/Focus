import { tempoDecorridoEmSegundos } from "../script.js";

// Criando a variável fora do escopo de timer, para usar na função MostrarTempo.
const tempoNaTela = document.querySelector('#timer');

export default function timer() {

  const startPauseBt = document.querySelector('#start-pause');
  const iniciarOuPausarBt = document.querySelector('#start-pause span');
  const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon");
  // Áudios
  const audioPlay = new Audio('sons/play.wav');
  const audioPause = new Audio('sons/pause.mp3');
  const audioTempoFinalizado = new Audio('sons/beep.mp3');

  let intervaloId = null;

  const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos.valor <= 0) {    
      audioTempoFinalizado.play();
      alert('Tempo finalizado!');
      zerar();
      return 
    } 
    tempoDecorridoEmSegundos.valor -= 1
    mostrarTempo();
    
  }

  startPauseBt.addEventListener('click', iniciarOuPausar);

  function iniciarOuPausar() {
    if(intervaloId) {
      audioPause.play();
      zerar();
      return
    } 
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = "Pausar";
    iniciarOuPausarBtIcone.setAttribute('src', 'imagens/pause.png')
  }

  function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    iniciarOuPausarBtIcone.setAttribute('src', 'imagens/play_arrow.png')
    intervaloId = null;
  }

  // Executando a função dentro do escopo de Timer.
  mostrarTempo()

}

// Função fora do escopo de Timer para ser exportada para outro arquivo.
export function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos.valor * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
  tempoNaTela.innerHTML = `${tempoFormatado}`
}
