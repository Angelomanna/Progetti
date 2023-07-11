let myArr = []
let risultato = document.getElementById("risultato")
let localinoStorage = JSON.parse(localStorage.getItem("myArr"))

if(localinoStorage){
    myArr = localinoStorage
    RenderList()
}

function Elimina(){
    localStorage.clear()
    myArr=[]
    RenderList()
}

function RenderList(){
    let listItems = ""
    for(let i = 0; i<myArr.length; i++){
        listItems += `
        <li>
            <a href='${myArr[i]}'>
            ${myArr[i]}
            </a>
        </li>
        `
    }
    risultato.innerHTML = listItems
}

function Genera(){
    let valore = document.getElementById("valore").value
    myArr.push(valore)
    valore.value = ""
    localStorage.setItem("myArr",JSON.stringify(myArr))
    RenderList()
}