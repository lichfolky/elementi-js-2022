// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let inputElement = document.getElementById("roll");
let resultElement = document.getElementById("result");

function roll(max) {
    let res = Math.floor(Math.random() * max) + 1;
    console.log("roll " + max + " = " + res);
    return res;
}

function nroll(times, max) {
    let sum = 0;
    for (let i = 0; i < times; i++) {
        sum += roll(max);
    }
    return sum;
}


function rollDice() {
    let inputElement = document.getElementById("roll");
    let dicesText = inputElement.value;
    if (dicesText.length >= 3) {
        let numerOfLaunches = 0;
        let numerOfLaunchesText = "";
        let positionDice = 0;
        let diceType = "";
        let diceTypeText = "";
        let dFound = false; // variabile soldatino

        for (let i = 0; i < dicesText.length; i++) {
            if (dicesText[i] >= 0) {
                numerOfLaunchesText += dicesText[i];
                //console.log(numerOfLaunchesText);
            } else {
                // ho trovato un carattere
                if (dicesText[i] == 'd') {
                    positionDice = i;
                    dFound = true;
                    break;
                }
            }
        }
        numerOfLaunches = +numerOfLaunchesText;
        if (dFound) {
            if (dicesText[positionDice + 1] > 0) {
                diceType += dicesText[positionDice + 1];
                if (dicesText[positionDice + 2] >= 0) {
                    diceType += dicesText[positionDice + 2];
                }
                resultElement.innerText = nroll(numerOfLaunches, diceType);
            } else {
                resultElement.innerText = "invalid argument";
            }
        } else {
            resultElement.innerText = "invalid argument";
        }
    } else {
        resultElement.innerText = "invalid argument";
    }
}

// inputElement.addEventListener("input", rollDice);
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

inputElement.addEventListener("keyup", rollDice);

