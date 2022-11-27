# Funzioni, date e intro Git

**Esercizio**
Un errore da mostrare con array:
https://codepen.io/Lichfolky/pen/wvyrjON

**Le funzioni**
Cosa sono le funzioni, parametri multipli, parametri default.  
Parametri non assegnati.  

Definire una funzione non l'esegue!  
Come chiamare una funzione.  

Return value, anche dentro ad un if, ciclo. 
`return` senza value.  
Scope, variabili locali e globali (anche nei cicli).  

`quadrato`  

`max(...array)`  

parametri primitivi sono passati per valore  
i non primitivi sono passati per referenza  


**Esercizio**
Scrivo 2d4 lancia due dadi da 4

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

```
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
```

**Esercizio**
Finiamo cornicetta per stampare su HTML
`pre`

```javascript
    scriviSuPagina(daStampare);
    ...
    function scriviSuPagina(textLine) {
        let cornicetta = document.querySelector(".cornicetta");
        let line = document.createElement("div");
        line.innerText = textLine;
        cornicetta.append(line);
    }
```
```HTML
    <pre class="cornicetta"></pre>
```



**Show**
regex

**Altro**
reset cache


****

const date2 = new Date('1995-12-17T03:24:00');

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString



**Esercizio**
Un po' di calvino?
contiamo caratteri, simboli.
lunghezza massima parole, frasi.

**Array multidimesionali**
