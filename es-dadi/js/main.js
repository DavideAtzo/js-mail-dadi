'use strict';

const btnGioca = document.getElementById('gioca');
let puntGiocatore = document.getElementById('punt-giocatore');
let puntComputer = document.getElementById('punt-pc');
const risultato = document.getElementById('risultato');

btnGioca.addEventListener('click',
    function(){
        puntGiocatore = Math.floor(Math.random() * 6);
        puntComputer = Math.floor(Math.random() * 6);

        if (puntGiocatore > puntComputer){
            console.log('hai vinto!');
          } 
          else if (puntGiocatore < puntComputer) {
            console.log('ahahah hai perso!');
          } 
          else{
            console.log('gioca di nuovo');
          }
            
    }
)