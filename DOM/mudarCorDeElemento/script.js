function verde() {
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('verde')

}

function vermelho() {
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('vermelho')
}

function azul() {
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.add('azul')

}

//Função contains:

function trocar() {
    if(document.querySelector('.botao').classList.contains('preto')) {
        document.querySelector('.botao').classList.remove('preto')
        document.querySelector('.botao').classList.add('amarelo')
    } else {
        document.querySelector('.botao').classList.remove('amarelo')
        document.querySelector('.botao').classList.add('preto')
    }
}