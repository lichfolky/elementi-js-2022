let catElem = document.querySelector(".cat");

let deg = 90;

let ruota = true;

// while (true) {
//     catElem.style.transform = "rotate(" + deg + "deg)";
//     deg++;
// }

// questo funziona solo una volta dopo 3 secondi
//setTimeout(ruotaGatto, 3000);

// tipo while true attende 1 sec
setInterval(ruotaGatto, 1000);


function ruotaGatto() {
    if (ruota) {
        catElem.style.transform = "rotate(" + deg + "deg)";
        deg = deg + 90;
    }
}

document.addEventListener("click", cambiaRuota);

function cambiaRuota(event) {

    if (event.type == "keydown") {
        if (event.key === ' ' || event.key === 'Spacebar') {
            ruota = !ruota;
        }
    }

    if (event.type == "click") {
        ruota = !ruota;
    }


    /*if (ruota == false) {
        ruota = true;
    } else {
        ruota = false;
    }*/

    /*
    const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');
const today = new Date();
// milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// expected output: -14182940000

console.log(today.getTime())

    */

}


document.addEventListener("keydown", (e) => cambiaRuota(e));


