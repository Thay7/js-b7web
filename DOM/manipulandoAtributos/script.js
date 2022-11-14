function trocarImagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'imgs/' + filename)
    document.querySelector('.imagem').setAttribute('data-animal', animalname)
}

function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    alert("O animal é: " + animal)
}

function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


