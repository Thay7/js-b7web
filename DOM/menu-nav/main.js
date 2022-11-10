function abrirMenu() {
    const menu = document.getElementById('menu-area')

    if (menu.style.width == '0px') {
        menu.style.width = '200px'
    } else {
        menu.style.width = '0px'
    }
}
//outro forma

function menuToglle() {
    let menuArea = document.getElementById("menu-area")

    if (menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened')
    } else {
        menuArea.classList.add('menu-opened')
    }
}


