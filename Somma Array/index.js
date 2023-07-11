

function Genera(){
let arr = []
let numeroMax = document.getElementById("numeroMax").value 
let max = document.getElementById("max").value

for(let i = 0; i<numeroMax; i++){
    arr.push(Math.floor(Math.random() * max + 1))
    document.getElementById("valori").innerHTML = `I tuoi valori:${arr}`
}

let somma = 0
arr.forEach((element) =>{
    somma += element
})

alert(somma)
}