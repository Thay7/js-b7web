//Transformar número em string
let n = 10
let res = n.toString() 

//Pegar quantos decimais iremos querer pegar
let n2 = 10.6587851
let res2 = n.toFixed(2)
//Saida: 10.65

//String em número (transforma apenas em inteiros, descarta decimais)
let n3 = '25'
let res3 = parseInt(n) + 5
//Saida depois do uso da função: 30

//String em número preservando os decimais (caso tenha)
let n4 = '25.9'
let res4 = parseFloat(n) + 5
//Saida depois do uso da função: 30.9
