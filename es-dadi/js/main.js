'use strict';
//Dichiarazione variabili
const btnGioca = document.getElementById('gioca');
let puntGiocatore = document.getElementById('punt-giocatore');
let puntComputer = document.getElementById('punt-pc');
const risultato = document.getElementById('risultato');
// evento del calcolo random sul click del bottone 
btnGioca.addEventListener('click',
    function(){
        puntGiocatore = Math.floor(Math.random() * 6 + 1);
        puntComputer = Math.floor(Math.random() * 6 + 1);
        // se vince il giocatore 
        if (puntGiocatore > puntComputer){
            document.getElementById('punt-giocatore').innerHTML = puntGiocatore;
            document.getElementById('punt-pc').innerHTML = puntComputer;
            risultato.innerText = ('hai vinto');
            console.log('hai vinto!');
          } 
        //   se vince il computer 
          else if (puntGiocatore < puntComputer) {
            document.getElementById('punt-giocatore').innerHTML = puntGiocatore;
            document.getElementById('punt-pc').innerHTML = puntComputer;
            risultato.innerText = ('ahahah hai perso!');
            console.log('ahahah hai perso!');
          } 
        //   se pareggiano 
          else{
            document.getElementById('punt-giocatore').innerHTML = puntGiocatore;
            document.getElementById('punt-pc').innerHTML = puntComputer;
            risultato.innerText = ('gioca di nuovo');
            console.log('gioca di nuovo');
          }
    }
)