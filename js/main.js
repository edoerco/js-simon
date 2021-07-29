// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeriGenerati = 5;
var listaNumeri = [];


// Un alert() espone 5 numeri generati casualmente.
for(i = 0; i < numeriGenerati; i++) {
    pushInArray(listaNumeri, rndNumber(1, 100));
};
alert(listaNumeri);




// funzioni
// creo numero random
function rndNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
};

// inserisco il numero random nell'array
function pushInArray(array, numero) {
        return array.push(numero);
};


