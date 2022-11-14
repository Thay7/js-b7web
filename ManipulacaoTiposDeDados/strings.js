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
Pode começar a contagem do final da string utilizando números negativos
*/
let nome3 = 'Justin Drew Bieber'
let resultado3 = nome.slice(0, 10) //posição inicial para pegar, numero de caracteres que quer pegar
console.log(resultado3)

//Igual ao slice
let nome4 = 'Justin Drew Bieber'
let resultado4 = nome.substring(0, 5)
console.log(resultado4)



