//Serve para reaproveitar dados de um array ou objeto

//Array
let numeros = [1, 2, 3, 4]

let outros = [...numeros, 5, 6, 7, 8]

//Object
let info = {
    nome: 'Thay',
    sobrenome: 'França',
    idade: 21
}

//Imagine que queremos adicionar ao objeto acima: cidade, estado e país
let novasInfos = {
    ...info,
    cidade: 'Cidade',
    estado: 'Estado',
    país: 'Brasil'
}

//Exemplo em função

function adicionarInfo (info) {
    let informacoesInternas = {
    ...info,
    status: 'Ativo',
    token: 'SA5SA65S4D',
    data_cadastro: '24-11-2022'
    }

    return informacoesInternas
}
console.log(adicionarInfo({nome: 'Thay'})) //Passa aqui, o que vai entrar no parametro, que ele vai puxar dentro da função