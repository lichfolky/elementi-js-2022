let textArea = document.querySelector("textArea");
let testo = textArea.value;
let righe = testo.split("\n");
let parole = [];
for (riga of righe) {
    let paroleRiga = riga.split(" ");
    parole.push(...paroleRiga);
}
console.log(parole);
let stats = document.getElementById("stat");
stats.innerText = parole.length;