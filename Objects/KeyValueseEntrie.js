let pessoa = {
    nome: 'Thay',
    sobrenome: 'França',
    idade: 21
}

//Keys
console.log(Object.keys(pessoa)) //Retorna um array com as chaves: nome, sobrenome e idade

//Values
console.log(Object.values(pessoa)) //Retorna um array com os valores: Thay, França e 21

//Entries
console.log(Object.entries(pessoa)) //Retorna um array que em cada posição tem outro array contendo dois itens: a chave e o valor