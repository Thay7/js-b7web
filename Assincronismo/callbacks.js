//Uma função que mandamos para uma outra execução
//Quando determinada coisa acontecer, a função é executada

function alertar() {
    console.log('opa, tudo bem?')
}

let nome = 'Thay'
(setTimeout(alertar, 2000)) //A função vai ser executada após 2 segundos
let sobrenome = 'França'
console.log(`Nome completo: ${nome} ${sobrenome}`)

//No código acima, a linha 11 retornará primeiro, depois a linha 9


