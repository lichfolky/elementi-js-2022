// Variabili globali
let a = 4;
let b = 5;
let c = 2;

//Qui definisco la funzione


// passaggio per valore
function somma(x, y) {
    console.log("ho chiamato la prima");
    return x + y;
}

// qui chiamo la funzione,
// usando i parametri a e b come input
console.log("somma: " + somma(a + c, b));

// passaggio per riferimento
function sommaArray(array) {
    console.log("ho chiamato la seconda");
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        /// i: 0, 1, 2
        // array[0] = 2, array[1] = 5, array[2] = 6
        // sum = sum + array[i];
        sum += array[i];
    }
    // qui sum è la somma
    return sum;
}


risultatoSomma = sommaArray([2, 5, 6]);
console.log("risultatoSomma: " + risultatoSomma);

// Rest
function sommaRest(...array) {
    // non for in!
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}

risultatoSomma = sommaRest(...[2, 5, 6]);
console.log("sommaRest: " + risultatoSomma);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

// DIFFERENZA TRA VARIABILI LOCALI E GLOBALI

// Variabili globali
let num = 3;

function quadrato() {
    // posso accedere alle variabili globali
    return num * num;
}

for (let i = 0; i < 2; i++) {
    // posso accedere alle variabili globali

    // inizializzo una variabile locale
    let ciao = num + i;
    console.log("ciclo " + ciao);
}
// questo mi da errore perchè sto cercando di 
// chiamare una variabile locale da uno 
// SCOPE diverso
// console.log("ciclo fuori " + ciao);


// qui uso variabili globali
console.log("quadrato1: " + quadrato());
a = 10;
console.log("quadrato2: " + quadrato());


function saluta(nome) {
    // variabile locale
    let str = "ciao " + nome;
    console.log(str);
}

// qui non posso accedere a str
saluta('mattia');



let arrPiu = [2, 3, 4];

// passaggio per riferimento
function aggiungiUno(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
}
aggiungiUno(arrPiu);
console.log("arrPiu:" + arrPiu);