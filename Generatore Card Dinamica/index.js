const url = document.getElementById("url")
const titolo = document.getElementById("titolo")
const paragrafo = document.getElementById("paragrafo")
const immagine = document.getElementById("immagine")

const coloratitolo = document.getElementById("coloratitolo")
const coloraparagrafo = document.getElementById("coloraparagrafo")

url.addEventListener("change", (e)=>{
    immagine.src = e.target.value
})

coloratitolo.addEventListener("input",(e)=>{
    titolo.style.color = e.target.value
})
coloraparagrafo.addEventListener("input",(e)=>{
    paragrafo.style.color = e.target.value
})