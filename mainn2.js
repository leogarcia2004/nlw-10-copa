function creatGame(player1, hour, player2){
    return `
    
    <li class="list-item">
        <img src="imagens2/logo${player1}.svg" alt="Foto ${player1}"> <strong>${hour}</strong> <img src="imagens2/logo${player2}.svg" alt="Foto ${player2}">
    </li>

    `
}

let delay = -0.4;
function creatCard(date, day, games){
    delay = delay + 0.4;
    return `<div id="card" style="animation-delay: ${delay}s">
    <h2 class="data-jogo">${date} 
         <span>${day}</span>
    </h2>
    <ul id="list-all" style="list-style: none;">
       ${games}
    </ul>
</div>`
}
document.querySelector('#cards').innerHTML = 

creatCard('24/11','QUINTA', 
creatGame('BR2','16:00','SER2')) +
creatCard('28/11','SEGUNDA',
 creatGame('BR2','13:00','SUI2')) +
creatCard('02/12','SEXTA',
 creatGame('CAM2','16:00','BR2')) +
 creatCard('26/11','SÁBADO',
 creatGame('ARG2','16:00','MEX2')) +
 creatCard('27/11','DOMINGO',
 creatGame('ESP2','16:00','ALE2')) +
 creatCard('28/11','SEGUNDA',
 creatGame('POR2','16:00','URU2'))
  