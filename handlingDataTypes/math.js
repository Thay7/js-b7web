//Arredondar a depender do numero
let round = Math.round(3.6)

//Forçar a arredondar pra baixo
let floor = Math.floor(3.99)

//Forçar a arredondar pra cima
let ceil = Math.ceil(3.4)

//Verificar o numero absoluto (positivo)
let abs = Math.abs(-10)

//Retorna o menor número dos que passamos como parametro
let min = Math.min(1, 2, 3)

//Retorna o maior número dos que passamos como parametro
let max = Math.max(1, 2, 3)

//Retorna um número aleatorio entre 0 e 1
let random = Math.random()

//Combinamos a função random() com a função floor() para definir um range maior, pois a função floor() não irá deixar passar:

let randomfloor = Math.floor(Math.random() * 100) //Multiplica pelo número máximo do range que quer definir

