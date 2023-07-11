
    let lunghezzaPass = document.getElementById("lunghezzaPass")
    let lettereGrandi = document.getElementById("lettereGrandi")
    let letterePiccole = document.getElementById("letterePiccole")
    let numeri = document.getElementById("numeri")
    let simboli = document.getElementById("simboli")
    let risultatoDiv = document.getElementById("risultato")

    let listaLettereGrandi = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let listaLetterePiccole = "qwertyuiopasdfghjklzxcvbnm"
    let listanumeri = "1234567890"
    let listasimboli = "\!£$%&/()=?"

    function Genera(){
        let stringaFinale = ""
        let risultato = ""

        if(lettereGrandi.checked) stringaFinale += listaLettereGrandi
        if(letterePiccole.checked) stringaFinale += listaLetterePiccole
        if(numeri.checked) stringaFinale += listanumeri
        if(simboli.checked) stringaFinale += listasimboli

        for(let i = 0; i<lunghezzaPass.value ; i++){
            risultato += stringaFinale.charAt(
                Math.floor(Math.random() * stringaFinale.length)
            )
        }
        risultatoDiv.innerHTML = ""
        risultatoDiv.innerHTML = risultato
    }
