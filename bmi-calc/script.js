
let peso = +prompt("inserisci il tuo peso (kg)");
let altezza = +prompt("inserisci la tua altezza (metri)");
// parseInt non va bene, altezza è un numero con la virgola

console.log("peso, altezza: ", peso, altezza);
let BMI = peso / Math.pow(altezza, 2);
/*
    Sottopeso       -           BMI < 18.5  
    Peso normale    -   18.5 <= BMI < 25.0  
    Sovrappeso      -   25.0 <= BMI < 30.0  
    Obesità         -   30.0 <= BMI
*/
console.log("BMI: ", BMI);

if (BMI < 18.5) {
    console.log("Sottopeso");
} else {
    // ! BMI < 18.5  ==> BMI >= 18.5 
    // BMI >= 18.5 non è obbligatorio

    if (BMI >= 18.5 && BMI < 25) {
        console.log("Peso normale");
    } else {
        if (BMI >= 25 && BMI < 30) {
            console.log("Sovrappeso");
        } else {
            if (30.0 >= BMI) {
                console.log("Obeso");
            }
        }
    }
}