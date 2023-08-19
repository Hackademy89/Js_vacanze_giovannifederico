// Esercizio 0
console.log (true && false); //risultato falso
console.log (true && 23); //risultato true
console.log (true && NaN); // risultato true
console.log (true && 'Ciao'); //risultato true
console.log (true && null); //risultato true

// Esercizio 1
let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 15;
let f = -6;
let g = 7;

console.log('La temperatura più calda è ', Math.max(a,b,c,d,e,f,g), " , quella più fredda è ", Math.min(a,b,c,d,e,f,g));

// Esercizio 2


//utilizzando if else

let voto = 29;

if (voto < 18) {
    console.log("Insufficiente");
} else if (voto >= 18 && voto < 21) {
    console.log("Sufficiente");
} else if (voto >= 21 && voto < 24) {
    console.log("Buono");
} else if (voto >= 24 && voto < 27) {
    console.log("Distinto");
} else if (voto >= 27 && voto <= 29) {
    console.log("Ottimo");
} else if (voto === 30) {
    console.log("Eccellente");
}

// utilizzando switch, case
let voto2 = 29;

switch (true) {
    case (voto2 < 18):
        console.log("Insufficiente");
    break;
    case (voto2 >= 18 && voto2 < 21):
        console.log("Sufficiente");
    break;   
    case (voto2 >= 21 && voto2 < 24):
        console.log("Buono");
    break;   
    case (voto2 >= 24 && voto2 < 27):
        console.log("Distinto");
    break;    
    case (voto2 >= 27 && voto2 <= 29):
        console.log("Ottimo");
    break;    
    case (voto2 === 30):
        console.log("Eccellente"); 
}

// Esercizio 3

let num = 2;

console.log(`Tabellina del ${num}:`);
for (let i = 1; i <= 10; i++) {
    let risultato = num * i;
    console.log(`${num} x ${i} = ${risultato}`);
}

// Esercizio 4

let tiriPerGiocatore = 5;
let scoreG1 = 0;
let scoreG2 = 0;
const min = 1


for (let i = 1; i <= tiriPerGiocatore; i++) {
    let tiroG1 = Math.floor(Math.random() * (6 - min + 1)) ;
    let tiroG2 = Math.floor(Math.random() * (6 - min + 1)) ;
    scoreG1 += tiroG1;
    scoreG2 += tiroG2;
}

console.log(`Punteggio giocatore 1: ${scoreG1}`);
console.log(`Punteggio giocatore 2: ${scoreG2}`);

if (scoreG1 > scoreG2) {
    console.log("Giocatore 1 vince!");
} else if (scoreG2 > scoreG1) {
    console.log("Giocatore 2 vince!");
} else {
    console.log("È un pareggio!");
}

//Esercizio 5

let n = Math.floor(Math.random() * 7) + 1;

switch (n) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Errore! Giorno della settimana non valido!");
    break;
}