//padEnd (prenche depois da sting)
let telefone = '2'
 
console.log(telefone.padEnd(9, '*')) //quantos caracteres tem que ter, qual item vai inserir para conseguir chegar aos 9, caso a string n tenha os 9 caracteres

//padEnd (prenche antes da sting)
console.log(telefone.padStart(9, '*')) //quantos caracteres tem que ter, qual item vai inserir para conseguir chegar aos 9, caso a string n tenha os 9 caracteres

//Aplicação prática

let cartao = '1234123412341234'

let lastDigits = cartao.slice(-4)

let cartaoMascarado = lastDigits.padStart(16, '*')
console.log(`Cartão: ${cartaoMascarado}`)