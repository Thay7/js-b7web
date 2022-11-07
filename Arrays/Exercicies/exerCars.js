//1. No array abaixo, qual o número que pega a ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes']
let x = 1
console.log('1. '+ carros[x])

//2. Troque a Ferrari por Audi
console.log('2. Lista com Audi:')
carros[1] = 'Audi'
console.log(carros)

//3. Adicione o Volvo à lista
console.log('3. Lista com Volvo')
carros.push('Volvo')
console.log(carros)

//4.Exiba quantos itens tem no array
console.log('4. itens no array: ')
console.log(carros.length)