// transformar número em string
let n = 10
let res = n.toString() 

//pegar quantos decimais iremos querer pegar
let n2 = 10.6587851
let res2 = n.toFixed(2)

//saida: 10.65

//string em número (transforma apenas em inteiros, descarta decimais)
let n3 = '25'
let res3 = parseInt(n) + 5

//saida depois do uso da função: 30

//string em número preservando os decimais (caso tenha)
let n4 = '25.9'
let res4 = parseFloat(n) + 5

//saida depois do uso da função: 30.9
