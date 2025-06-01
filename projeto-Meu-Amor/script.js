const musica = document.getElementById('musica');
const playPauseBtn = document.getElementById('playPause');
const progresso = document.getElementById('progresso');
const tempoAtualSpan = document.getElementById('tempoAtual');
const tempoTotalSpan = document.getElementById('tempoTotal');
const barraProgresso = document.getElementById('barraProgresso');
const player = document.getElementById('player');
const img =  document.getElementById('imagem');
const crono = document.getElementById('crono');
const texto = document.getElementById('textoMvd');
const botao = document.getElementById('click-here');

let isPlaying = false;

function clickInicial(){
    player.document.style.display = 'block';
    img.document.style.display = 'block';
    crono.document.style.display =  'block';
    texto.document.style.display = 'block';
    botao.document.style.display =  'none';

}

// Função para formatar tempo em mm:ss
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
}

// Quando a música é carregada, definir o tempo total
musica.onloadedmetadata = () => {
    tempoTotalSpan.textContent = formatTime(musica.duration);
};

// Atualizar a barra de progresso enquanto a música toca
musica.ontimeupdate = () => {
    const currentTime = musica.currentTime;
    const duration = musica.duration;
    progresso.style.width = `${(currentTime / duration) * 100}%`;
    tempoAtualSpan.textContent = formatTime(currentTime);
};

// Função para tocar ou pausar a música
playPauseBtn.onclick = () => {
    if (!isPlaying) {
      musica.play();
    } else {
      musica.pause();
    }
};

musica.onplay = () => {
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
};

musica.onpause = () => {
    isPlaying = false;
    playPauseBtn.textContent = '▶';
};

  // Clicando na barra de progresso pula para o ponto clicado
barraProgresso.onclick = (e) => {
    const rect = barraProgresso.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercent = clickX / width;
    musica.currentTime = musica.duration * clickPercent;
};
