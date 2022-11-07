
let ingredientes = [
    'ovo',
    'farinha',
    'leite',
    'açucar'
]

//Tamanho do array e pegar posição
console.log(`O tamanho no array é ${ingredientes.length}`)
console.log(`O primeiro item é o ${ingredientes[0]}`)

//Adicionar itens ao array
ingredientes.push('agua')
console.log(ingredientes)

//Remover último item do array
ingredientes.pop()
console.log(ingredientes)

//Remover o primeiro item o array
ingredientes.shift()
console.log(ingredientes)