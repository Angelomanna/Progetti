let carta1 = Math.floor(Math.random() * 10 + 1)
let carta2 = Math.floor(Math.random() * 10 + 1)
let cards = [carta1,carta2]
let somma = carta1 + carta2


let messaggio1 = document.getElementById("messaggio1")
let messaggio2 = document.getElementById("messaggio2")
let carte = document.getElementById("carte")
let total = document.getElementById("totale")
let bottone1 = document.getElementById("gioca")
let bottone2 = document.getElementById("daicarta")

let isAlive = true;
let isBlackjack = false

bottone2.style.display = "none"

function gioca(){
    messaggio1.style.display = "none"
    carte.innerHTML = "Le tue carte: "+ cards
    total.innerHTML = "Totale : " + somma
    bottone1.style.display = "none"

    if(somma < 21){
        messaggio2.innerHTML = "Vuoi Pescare una carta?"
        bottone2.style.display = "inline-block"
        isAlive = true
        isBlackjack = false
    }else if(somma == 21){
        messaggio2.innerHTML = "Hai fatto BlackJack! :)"
        isBlackjack = true
        bottone2.style.display = "none"
    }else if(somma > 21){
        messaggio2.innerHTML = "Hai Perso :("
        isAlive = false
        bottone2.style.display = "none"
    }
}

function daicarta(){
    if(isAlive == true && isBlackjack == false){
        let carta3 = Math.floor(Math.random() * 10 + 1)
        cards.push(carta3)
        somma += carta3
        gioca()
    }
}