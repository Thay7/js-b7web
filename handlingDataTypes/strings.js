//Filtrar strings

//Número de caracteres
let nome = 'Justin Drew Bieber'
let resultado = nome.length
console.log(resultado)

//Mostra a posição em que começa (caso não ache, ele retorna -1)
let nome2 = 'Justin Drew Bieber'
let resultado2 = nome.indexOf('Justin')
console.log(resultado2)

/*Pega um pedaço da string a partir de onde você quer e até onde você quer
Caso coloque só um parametro ele vai pegar tudo a partir da posição que informou
Pode começar a contagem do final da string utilizando números negativos (mas pega normalmente, nao de tras)
*/
let nome3 = 'Justin Drew Bieber'
let resultado3 = nome.slice(0, 10) //posição inicial para pegar, posição final para pegar
console.log(resultado3)

//Igual ao slice (mas sem contagem começando do final)
let nome4 = 'Justin Drew Bieber'
let resultado4 = nome.substring(0, 5)
console.log(resultado4)

//Primeiro parametro é a posição inicial e o segundo é a quantidade de caracteres que queremos pegar (funciona com negativo tambem)
let nome5 = 'Justin Drew Bieber'
let resultado5 = nome.substr(0, 5)
console.log(resultado4)


//Manipular strings

let nome6 = 'Justin Drew Bieber'
let resultado6 = nome.replace('Drew', 'Baldwin') //pesquise por X, substitua por Y
console.log(resultado6)

//Deixar tudo maiusculo
let nome7 = 'Justin Drew Bieber'
let resultado7 = nome.toUpperCase()
console.log(resultado7)

//Deixar tudo minusculo
let nome8 = 'Justin Drew Bieber'
let resultado8 = nome.toLowerCase()
console.log(resultado8)

//Concatenar informações (melhor usar concatenação normal)
let nome9 = 'Justin Drew Bieber'
let resultado9 = nome.concat(' é Lindo')
console.log(resultado9)

//Retirar todos os espaços
let nome10 = 'Justin     Drew     Bieber'
let resultado10 = nome.trim() //usar lenght depois do trim() para ver quantos caracteres tem
console.log(resultado10)

//Posição do caractere
let nome11 = 'Justin Drew Bieber'
let resultado11 = nome.charAt(3) //(pode-se substitutir pelo substr(3, 1) ou simplismente fazer:  nome[3])
console.log(resultado11)

//Tranforma string em array
let nome12 = 'Justin Drew Bieber'
let resultado12 = nome.split(' ') //dividir pelo parametro que passar
console.log(resultado12)