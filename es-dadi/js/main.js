'use strict';

const btnGioca = document.getElementById('gioca');
let puntGiocatore = document.getElementById('punt-giocatore');
let puntComputer = document.getElementById('punt-pc');
const risultato = document.getElementById('risultato');

btnGioca.addEventListener('click',
    function(){
        puntGiocatore = Math.floor(Math.random() * 6 + 1);
        puntComputer = Math.floor(Math.random() * 6 + 1);

        if (puntGiocatore > puntComputer){
            document.getElementById('punt-giocatore').innerHTML = puntGiocatore;
            document.getElementById('punt-pc').innerHTML = puntComputer;
            console.log('hai vinto!');
          } 
          else if (puntGiocatore < puntComputer) {
            document.getElementById('punt-giocatore').innerHTML = puntGiocatore;
            document.getElementById('punt-pc').innerHTML = puntComputer;
            console.log('ahahah hai perso!');
          } 
          else{
            document.getElementById('punt-giocatore').innerHTML = puntGiocatore;
            document.getElementById('punt-pc').innerHTML = puntComputer;
            console.log('gioca di nuovo');
          }
    }
)