let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onclick = (e) => {
    if (e.target == menu) return;
    menu.classList.remove('')
    navbar.classList.remove('active')
}