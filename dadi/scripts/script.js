// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: 
// Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// genero un numero random e lo assegno all'utente e alla cpu
let playerNum = Math.floor(Math.random() * 6) + 1;
let cpuNum = Math.floor(Math.random() * 6) + 1;
console.log(`Il numero del giocatore è: ${playerNum}\nIl numero della CPU è: ${cpuNum}`);

// assegno un valore al risultato se si verificano determinati esiti e
// stampo i risultati
let result;
if (playerNum > cpuNum) {
    result = 'VITTORIA GIOCATORE';
} else if (playerNum < cpuNum) {
    result = 'VITTORIA CPU';
} else {
    result = 'PAREGGIO';
}

console.log(`Il risultato è: ${result}`);
