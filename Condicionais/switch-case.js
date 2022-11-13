/*Quando usar?
Quando você tem um valor especifico e a partir desse valor você precisa fazer varias condiçoes

Variaçoes:

default: valor padrão para caso nenhuma condição tenha sido satisfeita (linha 28)

quando temos o mesmo codigo para mais de uma condição pode-se fazer da seguinte forma: (linhas 24 e 25)
*/

let dia = 6
let diaNome = ''

switch(dia) {
    case 6:
    case 7:
        diaNome = 'Final de semana'
        break;
    default:
        diaNome = 'Dia de semana'
        break;
}

console.log(diaNome)

