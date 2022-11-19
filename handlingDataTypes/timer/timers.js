let timer //Criar a variavel fora, para conseguir usar dentro do escopo da segunda função

function comecar() {
    timer = setInterval(showTime, 1000) //função que quer executar, internvalo em milissegundos entre uma execução e outra

    document.querySelector('#parar').classList.remove('parar')
}

function parar() {
    clearInterval(timer)

    document.querySelector('#parar').classList.add('parar')
}

//Função responsável por exibir na tela hora, minuto e segundo
function showTime() {

    let date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    //Verificações para ver se precisa do 0 antes da hora, minutos e segundo
    if (h < 10) {
        h = '0' + h
    }

    if (m < 10) {
        m = '0' + m
    }

    if (s < 10) {
        s = '0' + s
    }

    let txt = h + ':' + m + ':' + s

    document.querySelector('.demo').innerHTML = txt
}

//A função abaixo volta para o nome "Timer :)" após clicar no botão "Parar"

const tparar = document.querySelector('#parar')
const demo = document.querySelector('.demo')

function clicaremparar() {
    if (tparar.classList.contains('parar')) {
        demo.innerHTML = 'Timer :)'
    }
}
tparar.addEventListener('click', clicaremparar)