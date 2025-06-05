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
const heart = document.getElementById('heart-container');
const myLove1 = document.getElementById('myLove1');
const myLove2 = document.getElementById('myLove2');
const myLove3 = document.getElementById('myLove3');
const myLove4 = document.getElementById('myLove4');

let isPlaying = false;

function clickInicial() {
    myLove1.style.display = 'none'
    myLove2.style.display = 'none'
    myLove3.style.display = 'none'
    myLove4.style.display = 'none'
    heart.style.display = 'block'
    player.style.display = 'block';
    img.style.display = 'block';
    crono.style.display =  'block';
    texto.style.display = 'block';
    botao.style.display =  'none';

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

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 +10) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => {
    heart.remove();
    }, 5000); // Remove após 5 segundos
}

  // Criar um coração a cada 300ms
setInterval(createHeart, 300);

