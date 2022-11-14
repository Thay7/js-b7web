function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', function semScrollButton() {

    let alturaDoScroll = window.scrollY

    console.log(alturaDoScroll)
    
        if (alturaDoScroll > 0) {
            document.querySelector('#scrollbutton').classList.add('scrollbutton')
        } else {
            document.querySelector('#scrollbutton').classList.remove('scrollbutton')
        }
})

/*Solução do prof:

Pelo style:

function decidirBotaoScroll() {
    if(window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none'
    } else {
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}

window.addEventListener('scroll', decidirBotaoScroll())
*/