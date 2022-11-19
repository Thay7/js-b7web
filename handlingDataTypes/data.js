let d = new Date() //Pega a data atual e congela nela (para atualizar a hora, cria-se um timer)

//Pegar ano
let novoValor = d.getFullYear()

//Pegar mês
let novoValor2 = d.getMonth()//Mês no js começa do 0

//Pegar dia
let novoValor3 = d.getDay() //No js o dia vai de 0 a 6 e começa no domingo

//Pegar dia atual
let novoValor4 = d.getDate()

//Pegar as horas
let novoValor5 = d.getHours()

//Pegar os minutos
let novoValor6 = d.getMinutes()

//Pegar os segundos
let novoValor7 = d.getSeconds()

//Pegar os milissegundos
let novoValor8 = d.getMilliseconds()

//Retorna os milissegundo que se passaram desde 1970 até o momento atual
let novoValor9 = d.getTime()


//Manipulando a data
let data = new Date()

//Mudar o ano
data.setFullYear('2020')//passar o ano como parametro

//Mudar o mes
data.setMonth('2')//passar o mes como parametro (0  a 11)

//Mudar o dia
data.setDate(19)

//E assim sucessivamente para dia, horas, minutos, milissegundos...

//Aumentar ou diminuir a data atual 
data.setDate(data.getDate() + 5)

//O mesmo para ano, mes, dia, horas, minutos, milissegundos...

let mostrarnoterminal = data
console.log(mostrarnoterminal)


