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

//seconda fase raccolta dati.

km = Number(prompt("ciao, inserisci i chilometri"))
age = Number(prompt("ciao, inserisci l'età del passeggero"))
console.log(km);
console.log(age);
let normal_price = km * price;
console.log(normal_price);






//terza fase: elaborare i DataView.
if (age < 18 ){
    let final_price_20 = (km * price - (km * price * 20 / 100));
    ticket = alert(final_price_20.toFixed(2));
} else if (age > 65) {
    let final_price_40 = (km * price - (km * price * 40 / 100));
    ticket = alert(final_price_40.toFixed(2));
}
else {
    ticket = alert(normal_price.toFixed(2));
}

console.log(ticket);










