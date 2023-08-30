import timer, {mostrarTempo} from "./JS/timer.js";
import context from "./JS/context.js";

export const tempoDecorridoEmSegundos = { valor: 1500 };

// Música de fundo no botão foco
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
  if(musica.paused) {
    musica.play()
  } else {
    musica.pause()
  }
});

mostrarTempo();
timer();
context();
