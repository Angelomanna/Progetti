const div = document.querySelector('.hamburger')
const div1 = document.querySelector('.contenuto1')
const div2 = document.querySelector('.contenuto2')
const div3 = document.querySelector('.contenuto3')
const div4 = document.querySelector('.menu-mobile')


div.addEventListener("click",()=>{
    div1.classList.toggle("active")
    div2.classList.toggle("active")
    div3.classList.toggle("active")
    div4.classList.toggle("active")
})