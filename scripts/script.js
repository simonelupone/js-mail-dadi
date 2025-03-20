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
        dot++
    }
}
console.log(`DOT: ${dot}, AT: ${at}`);

// se dot >= 1 e di at ce ne è solo una assegno true alla variabile flag invalidInput
let invalidInput = dot == 0 && at != 1 ? true : false;
console.log(invalidInput);








