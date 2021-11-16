
let parola = prompt('inserisci parola :');

let risulato = invertiParola(parola);

if (risulato == 1) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function invertiParola(str) {
    let strInversa = str.split('').reverse().join('');

    if (parola == strInversa) {
        return 1;
    } else {
        return 0;
    }
}
