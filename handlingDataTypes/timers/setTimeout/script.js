let timer 

//A função setTimeout() irá rodar uma função, após o tempo informado em milisssegundos como segundo parametro
function rodar() {
    timer = setTimeout(function () {
        document.querySelector('#rodou').innerHTML = 'Rodou!'
    }, 2000)
}

//Como parar? Cria-se um timer, que será alimentado na função para rodar. Para parar, a função clearTimeout irá receber como parametro esse timer e irá para-lo antes de ele rodar
function parar() {
    clearTimeout(timer)
}

//Só é possível parar antes de o setTimeout comecar a rodar!!!