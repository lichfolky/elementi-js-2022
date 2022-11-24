let str = "Pippo pippo non lo sa";
//console.log("prima lettera: " + str[0]);
let parole = str.split(" ");
//console.log(parole);
//console.log(parole.join("-"));
/*
let nomeFile = "esercizio-cornicetta-ok";
parole = nomeFile.split("-");
console.log(parole);
*/
/*/*
ESERCIZIO
Data la stringa "Pippo pippo non lo sa" creare:

*********
* Pippo *
* pippo *
* non   *
* lo    *
* sa    *
*********
*/

// stampare la prima riga
// per ogni parola della stringa
//     stampare "* parola *"
// stampare ultima riga

let testo = "Ecco il mio segreto. È molto semplice: si vede solo con il cuore. L'essenziale è invisibile agli occhi";
let maxParola = "";
let maxParolaNum = 0;

/*
trova parola più lunga
stampa * pari a lunghezza parola + 4
*/
function stampaRiga() {
    let parole = testo.split(" ");

    maxParola = "";
    maxParolaNum = 0;

    for (parola of parole) {
        if (parola.length > maxParolaNum) {
            maxParola = parola;
            maxParolaNum = parola.length;
        }
    }
    // console.log(maxParola, maxParolaNum);
    let asterischi = "";
    for (let i = 0; i < maxParolaNum + 4; i++) {
        asterischi += "*";
    }
    console.log(asterischi);
    scriviSuPagina(asterischi);
}

function stampaParole() {
    let parole = testo.split(" ");
    for (parola of parole) {
        let daStampare = "* ";
        daStampare += parola;
        for (let i = 0; i < maxParolaNum - parola.length; i++) {
            daStampare += " ";
        }
        daStampare += " *";
        console.log(daStampare);
        scriviSuPagina(daStampare);
    }
}

function scriviSuPagina(textLine) {
    let cornicetta = document.querySelector(".cornicetta");
    let line = document.createElement("div");
    line.innerText = textLine;
    cornicetta.append(line);
}

stampaRiga();
stampaParole();
stampaRiga();