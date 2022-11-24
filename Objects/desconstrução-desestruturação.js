let pessoa = {
    nome: 'Thay',
    sobrenome: 'França',
    idade: 21,
    social: {
        facebook: 'thay frança',
        instagram: '@ennylyaht'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

//Processo de desconstrução (acessar informações especificas do objeto e transformar em uma variável)

//Antigamente se fazia assim, uma variavel para cada informação
let nomee = pessoa.nome 
let sobrenomee = pessoa.sobrenome

// //Nova forma de fazer, pegando varias informações
// let {nome, sobrenome, idade} = pessoa

// //Para alterar o nome da variavel 
// let {nome:nomePessoa} = pessoa

// //Caso a variavel nao exista, podemos definir um valor padrão:
// let {idadee = 0} = pessoa //Mas se vier o valor da idade ele mostrará esse valor e não o que definimos

// //Pegar objeto dentro de objeto
// let {facebook, instagram} = pessoa.social 

// //Pegar objeto dentro de objeto + outras informações do objeto princial
// let {nome, idade, social:{instagram}} = pessoa//Apenas instagram vira uma variavel

//Pegar informações de objeto apartir de uma função
function pegarNomeCompleto({nome, sobrenome}) { //transforma o parametro em uma variavel
    return `${nome} ${sobrenome}`
}

console.log(pegarNomeCompleto(pessoa))

