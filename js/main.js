// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeriGenerati = 5;
var listaNumeri = [];
var secondi = 2000;  //i secondi dell'esercizio sono 30 (30000)
var numeriUtente = [];


// Un alert() espone 5 numeri generati casualmente.
for(i = 0; i < numeriGenerati; i++) {
    pushInArray(listaNumeri, rndNumber(1, 100));
};
alert(listaNumeri);
console.log(listaNumeri);

setTimeout(handler, secondi);




// funzioni
// creo numero random
function rndNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
};

// inserisco il numero random nell'array
function pushInArray(array, numero) {
        return array.push(numero);
};

function handler() {
    for(i = 0; i < numeriGenerati; i++) {
        var risposta = parseInt(prompt('Inserisci il numero che ti ricordi'));
        if(listaNumeri.includes(risposta) == true) {
            pushInArray(numeriUtente, risposta);
        }
    }
    console.log('i numeri indovinati sono: ' + numeriUtente);
    console.log('Hai indovinato ' + numeriUtente.length + ' numeri');
}


