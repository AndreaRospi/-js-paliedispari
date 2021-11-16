let scelta = "";
let numero = 0;

do {
    scelta = prompt('scegli tra pari o dispari :')
} while (scelta != 'pari' && scelta != 'dispari')

do {
    numero = parseInt(prompt('scegli un numero da 1 a 5'));
} while (numero < 1 || numero > 5);

let numeroPc = numeroRandom();

let somma = numero + numeroPc

let risulato = calcolo(somma);
if (scelta == risulato) {
    console.log('hai vinto!');
} else {
    console.log('hai perso!');
}

function numeroRandom() {
    let n = 0;
    n = Math.floor(Math.random() * 5 + 1);
    console.log(n);
    return n;

}

function calcolo(somma) {
    let r = '';
    somma = somma % 2
    if (somma == 0) {
        r = 'pari';
    } else {
        r = 'dispari';
    }
    return r;
}