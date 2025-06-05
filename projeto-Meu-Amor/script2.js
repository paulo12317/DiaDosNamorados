// Variáveis para guardar o tempo
let meses = 1;
let dias = 27;
let horas = 14;
let minutos = 23;
let segundos = 0;
let p = document.getElementById("timer");

// Função para atualizar o cronômetro
function atualizarTimer(){
    segundos++
    if(segundos >= 60){
        segundos = 0;
        minutos++
    }
    if(minutos >= 60){
        minutos = 0;
        horas++
    }
    if(horas >= 24){
        horas = 0;
        dias++
    }
    if(dias >= 30){ // aproximadamente um mês
        dias = 0;
        meses++
    }
    // Atualiza o display
    p.innerHTML = `Mês: ${meses} | Dia: ${dias} | Hora: ${horas} | Min: ${minutos} | Seg: ${segundos}`;
}

//Chama a função a cada segundo
setInterval(atualizarTimer,1000);