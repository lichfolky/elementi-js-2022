# Eventi, funzioni e scope

**Le funzioni**
Cosa sono le funzioni, parametri multipli, parametri default.
Parametri non assegnati.
Return value, anche dentro ad un if, ciclo. `return` senza value
Scope, variabili locali e globali (anche nei cicli).

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


****

**Esercizio**
Un errore da mostrare con array:
https://codepen.io/Lichfolky/pen/wvyrjON

**Esercizio**
Un po' di calvino?

**Show**
reset cache
max(...array)
regex
skretch

**Esercizio**
Dato questo codice:
[Treasure hunt](https://codepen.io/Lichfolky/pen/GRGQazY)

- cambiare il numero di righe e colonne
- cosa fa newTreasure?
- Mostra un messaggio di vittoria quando il tesoro è stato trovato.
- a cosa servono le condizioni in AFTER, BEFORE e UP? Perchè non c'è DOWN?
- mostrare un punteggio che aumenta per ogni casella scoperta (BONUS, non modificare piu se tesoro trovato)

**Esercizio**
Countdown da finire con setTimeout
https://codepen.io/Lichfolky/pen/KKeXGJv


event listener
setTimeout
funzioni parametri
