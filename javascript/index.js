//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

console.log('ciao');

//prima fase di preparazione.

let km;
let age;
let price = 0.21;
let final_price;
let discount_20;
let discount_40;
//seconda fase raccolta dati.

km = prompt("ciao, inserisci i chilometri")
age = prompt("ciao, inserisci l'età del passeggero")
console.log(km);
console.log(age);


//terza fase: elaborare i DataView.

if (age < 18 ) {
    final_price = alert(km * price - (km * price * 20 / 100));
    
} else if (age > 65) {
    final_price = alert(km * price - (km * price * 40 / 100));
}

console.log(final_price);






