const bottone = document.getElementById("reset")
bottone.style.display = "none"


let score = {
    wins:0,
    draws:0,
    losses:0
}
function Gioca(mossaGiocatore){
    bottone.style.display = "block"
    let mossaCOM = dammimossaCOM()
    let risultato = ""

    if(mossaGiocatore === "Sasso"){
        if(mossaCOM === "Sasso"){
            risultato = "Hai Pareggiato!"
        }else if(mossaCOM === "Carta"){
            risultato = "Hai Perso!"
        }else if(mossaCOM === "Forbici"){
            risultato = "Hai Vinto!"
        }
    }

    if(mossaGiocatore === "Carta"){
        if(mossaCOM === "Sasso"){
            risultato = "Hai Vinto!"
        }else if(mossaCOM === "Carta"){
            risultato = "Hai Pareggiato!"
        }else if(mossaCOM === "Forbici"){
            risultato = "Hai Perso!"
        }
    }
    if(mossaGiocatore === "Forbici"){
        if(mossaCOM === "Sasso"){
            risultato = "Hai Perso!"
        }else if(mossaCOM === "Carta"){
            risultato = "Hai Vinto!"
        }else if(mossaCOM === "Forbici"){
            risultato = "Hai Pareggiato!"
        }
    }

    
    if(risultato === "Hai Vinto!"){
        score.wins += 1
    }else if(risultato === "Hai Pareggiato!"){
        score.draws += 1
    }else if(risultato === "Hai Perso!"){
        score.losses += 1
    }


    document.getElementById("dacancellare").style.display = "none"
    document.getElementById("scelta").innerHTML = `Hai scelto:${mossaGiocatore}! Il COM ha scelto ${mossaCOM}! ${risultato}  ` 
    document.getElementById("risultato").innerHTML = `Vittorie:${score.wins}  Pareggi:${score.draws}  Sconfitte:${score.losses}`
    
    
}


function dammimossaCOM(){
    let mossaCOM = Math.random()
    let scelta = ""

    if(mossaCOM >= 0 && mossaCOM < 1/3){
        scelta = "Sasso"
    }else if(mossaCOM >= 1/3 && mossaCOM < 2/3){
        scelta = "Carta"
    }else if(mossaCOM >= 2/3 && mossaCOM < 1){
        scelta = "Forbici"
    }
    return scelta
}

function Reset(){
    
    document.getElementById("risultato").innerHTML = `Vittorie:0  Pareggi:0  Sconfitte:0`
}