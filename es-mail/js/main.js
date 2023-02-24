'use strict';
//Dichiarazione variabili
const yourMail = prompt('Inserirsci la tua mail');
const listMail = ['fragola@gmail.com', 'banana@gmail.com', 'pesca@gmail.com', 'kiwi@gmail.com', 'limone@gmail.com'];

console.log(listMail);
// ciclo che controllerà se la mail è presente tra i privilegiati 
for (let i = 0; i < listMail.length; i++) {
    if (yourMail === listMail[i]) {
        console.log ('complimenti, sei tra i privilegiati');
    }
    else(yourMail != listMail[i])
        console.log('Tu non puoi passare!!');
        break;
}


