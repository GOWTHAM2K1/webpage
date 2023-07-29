const dropdown = document.getElementsByClassName("dropdown")[0]
const navbar = document.getElementsByClassName("navbar")[0]

dropdown.addEventListener('click',()=>{
    navbar.classList.toggle('active')
})

