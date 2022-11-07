let personagem = {
    nome: 'Thay',
    idade: '21',
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    },
    carros: [
        { modelo: 'Fiat', cor: 'preto' },
        { modelo: 'Ferrari', cor: 'vermelho' }
    ]

}

//Acessar propriedade
console.log(personagem.nome)
console.log(personagem.caracteristicas.forca)
console.log(personagem.carros[0].cor)

//Alterar valores
personagem.nome = 'Thaylynne'
console.log(personagem.nome)

personagem.olhos.push('verde')
console.log(personagem.olhos)

//Aumentar o valor
personagem.caracteristicas.forca += 5
console.log(personagem.caracteristicas.forca)

//Função dentro do objeto
let pessoa = {
    nome: 'Thay',
    sobrenome: 'França',
    idade: 21,
    nomeCompleto: function() { //this é uma keyword, se refere ao proprio objeto 
        return `${this.nome} ${this.sobrenome}`
    }
}

//Como acessar a função dentro do objeto
console.log(pessoa.nomeCompleto())