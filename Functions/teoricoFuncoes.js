//Função com retorno condicional
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 10
let verificacao = maiorDeIdade(idade)

if (verificacao) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
}




//Arrow function
const nomeDaFuncao = (parametro1, parametro2) => {
    return algo
}
//mais resumida (para quando retorna só uma linha)
const somar = (x, y) => x + y

//quando só tem um parametro não precisa dos parenteses
const sobrenome = sob => 'Thay ' + sob




//Variaveis dentro de funções
let count = 0

function add() {
    let count = 0
    count++
}

add()
add()

console.log(count) //dentro das funções, variaveis com mesmo nome, as locais sobrepõem variaveis as globais, dessa forma aqui retorna 0, se comentamos a linha 39, aqui retorna 2




//Funções dentro de funções (usar arrow function)
function addSquares(a, b) {

    const square = (x) => {
        return x * x
    }
    
    let sqrA = square(a)
    let sqrB = square(b)
    return sqrA + sqrB
}

console.log(addSquares(2, 3))
