//Quando realizamos uma requisição, o JSON vem como uma string (ou seja, as chaves entre aspas duplas), a função parse() pega essa string e transforma em JSON(objeto) novamente:

let pessoa = JSON.parse('{"nome": "thay", "idade": 21}')

//A partir disso, conseguimos acessar as propriedades como acessamos um objeto:
console.log(pessoa.nome)