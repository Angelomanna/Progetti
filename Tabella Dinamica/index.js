const calciatori = [
    {
        Id:0,
        Nome:"Cristiano Ronaldo",
        Gol:789,
        Assist:300,
        Età:41
    },
    {
        Id:1,
        Nome:"Lionel Messi",                
        Gol:787,                                /*DATI GENERATI A CASO*/
        Assist:420,
        Età:38
    },
    {
        Id:2,
        Nome:"Erling Haaland",
        Gol:344,
        Assist:119,
        Età:23
    },
    {
        Id:3,
        Nome:"Robert Lewandoski",
        Gol:750,
        Assist:103,
        Età:38
    },
    {
        Id:4,
        Nome:"Karim Benzema",
        Gol:693,
        Assist:152,
        Età:40
    },
    {
        Id:5,
        Nome:"Gabriel Jesus",
        Gol:313,
        Assist:102,
        Età:25
    }
]

const tabella = document.getElementById("tabella")



calciatori.forEach((data) =>{
    const row = document.createElement("tr")

    Object.keys(data).forEach((key)=>{
        const col = document.createElement("td")
        const text = document.createTextNode(data[key])
        col.appendChild(text)
        row.appendChild(col)
    })
    tabella.appendChild(row)
})