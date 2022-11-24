let header = document.querySelector("header");
let title = document.querySelector(".titolo");
title.innerText = "Tabelline";


/* lasciamo stare per ora
for (risultato in risultati) {
    console.log(risultato);
}
*/
/* 

let risultati = [];
for (let num = 1; num <= 10; num++) {
    risultati.push(num * 2);
}

for (let i = 0; i < risultati.length; i++) {
    console.log(risultati[i]);
}

for (risultato of risultati) {
    console.log(risultato);
}

*/

for (let num = 1; num <= 10; num++) {
    let operazione = document.createElement("div");
    operazione.innerText = "2 x " + num + " = " + (num * 2);
    operazione.classList.add("operazione");
    operazione.onclick = function () {
        operazione.classList.toggle("done");
    };
    header.append(operazione);
}

/*
let operazioni = document.querySelectorAll(".operazione");
for (operazione of operazioni) {
    operazione.classList.toggle("ciao");
}
*/

