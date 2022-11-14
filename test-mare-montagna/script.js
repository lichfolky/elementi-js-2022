alert("Benvenuto al test `Mare o montagna?`");
let mare = 0;
let montagna = 0;

let risposta = prompt("Ti piace nuotare (vero o falso)");

if (risposta == "falso") {
    montagna = montagna + 1;
} else {
    if (risposta == "vero") {
        mare++;
    } else {
        alert("errore");
    }
}

console.log("mare: " + mare + " montagna: " + montagna + " risposta " + risposta);

risposta = prompt("Ti piace la neve (vero o falso)");
if (risposta == "vero") {
    montagna++;
} else {
    mare++;
}
console.log("mare: " + mare + " montagna: " + montagna + " risposta " + risposta);

risposta = prompt("Ti piace il freddo o il caldo o temperatura ambiente? (freddo o caldo)");
if (risposta == "freddo") {
    montagna++;
} else {
    if (risposta == "caldo") {
        mare++;
    }
}

console.log("mare: " + mare + " montagna: " + montagna + " risposta " + risposta);
if (mare > montagna) {
    alert("ti piace il mare");
} else {
    if (mare < montagna) {
        alert("ti piace la montagna");
    } else {
        alert("ti piace il mare e montagna o nessuno dei due");
    }
}