
let ingredientes = [
    'ovo',
    'leite',
    'farinha',
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

//Separa os itens com separador especifico que você definir
ingredientes.join(', ')
console.log(ingredientes)

//Alterar ultimo item
ingredientes[ingredientes.length - 1] = 'sal'
console.log(ingredientes)


//Ordenação de Arrays
//Alfabetica
ingredientes.sort()
console.log(ingredientes)

//Decrescente
ingredientes.sort()
ingredientes.reverse()
console.log(ingredientes)

//Ordenar baseado em propriedade de item do array
let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
]

cars.sort((a, b) => { //a é o atual e b é o seguinte, eles dois vão ser comparados
    if (a.year > b.year) {
        return 1 //vai pra frente
    } else if (a.year < b.year) {
        return -1 //vai pra tras
    } else {
        return 0 //continua no mesmo lugar
    }

    //simplificado: return a.year - b.year OU decrescente b.year - a.year
})
console.log(cars)