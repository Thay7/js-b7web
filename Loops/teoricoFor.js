//Loop For em Arrays
let cores = ['preto', 'branco', 'azul', 'vermelho']

cores.push('verde')

//Forma convencional
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

//Dessa forma, o loop executará apenas o numero de itens que tiver o array
for (let i in cores) {
    console.log(cores[i])
}

//Aqui, ao inves de pegar o indice, ele já pega o item em sí
for (let cor of cores) {
    console.log(cor)
}

//Acessando obejto dentro do array
let cores2 = [
    { nome: 'preto', qt: 10 },
    { nome: 'azul', qt: 5 },
    { nome: 'vermelho', qt: 15 }
]

for (let cor of cores2) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`)
}