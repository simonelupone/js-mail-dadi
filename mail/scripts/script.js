// determino l'array con le email
const emailList = [
    "marco.rossi87@gmail.com",
    "laura.bianchi22@yahoo.com",
    "andrea.verdi@outlook.com",
    "federico.mancini@live.com",
    "giulia.conti@hotmail.com",
    "marta.ferretti@gmail.com",
    "lorenzo.deangelis@icloud.com",
    "chiara.naldi@company.com",
    "simone.lupone@gmail.com",
    "alessandra.ferri@university.edu"
];

// determino la mail dell'utente tramite un prompt
const userEmail = prompt('Inserisci la tua mail');
console.log(`Mail dell'utente: ${userEmail}.`);

// imposto un ciclo per validare la mail dell'utente.
// In questo punto effettuo una conta degli elementi necessari affinchè la mail sia valida
let dot = 0, at = 0;
for (let i = 0; i < userEmail.length; i++) {
    if (userEmail[i] == '@') {
        at++;
    }
    if (userEmail[i] == '.') {
        dot++;
    }
}
console.log(`DOT: ${dot}, AT: ${at}`);

// se le condizioni sono verificate allora assegno true alla variabile flag isValidInput
let isValidInput = userEmail.length != 0 && dot > 0 && at == 1 ? true : false;
console.log(`L'input ${isValidInput ? 'è valido' : 'non è valido'}`);

// imposto un ulteriore ciclo per controllare se la mail dell'utente è presente nell'elenco

// dichiaro una variabile flag
let mailCheck = false;

// verifico se la mail è presente nell'array
if (isValidInput) {
    for (let i = 0; !mailCheck && i < emailList.length; i++) {
        if (emailList[i] == userEmail) {
            mailCheck = true;
        }
    }
} else {
    alert('Input non valido, refresha la pagina')
}

// stampo un messaggio in base all'esito del controllo
if (mailCheck) {
    alert('L\'utente è tra gli invitati');
} else if (isValidInput && !mailCheck) {
    alert('L\'utente non è tra gli invitati');
}





