//Serve para quando você não sabe quantos parametros(itens) o usuario vai mandar

function adicionar(...numeros) { //Independente de quantos itens forem enviados, iremos receber eles aqui em formato de array

}

//Exercicio juntando rest e spread
function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]

    return novoConjunto
}
let nomes = ['Thay', 'Gui']

let outros = adicionar(nomes, "Gaby", "Eren", "Mikasa")

console.log(outros)