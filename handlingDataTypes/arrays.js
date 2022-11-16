//Transformar array em string (separando sempre por virgula)
let lista = ['Ovo', 'Farinha', 'Leite', 'Açucar']
let res = lista.toString()
console.log(res)

//Transformar array em string separando os items pelo parametro que você passar
let res2 = lista.join(' ')
console.log(res2)

//Retorna posição do item que eu passar como parametro (se não achar o item no array, retorna -1)
let res3 = lista.indexOf('Leite')
console.log(res3)

//Remove o ultimo item do array (altera o proprio array)
lista.pop()
let res4 = lista;
console.log(res4)

//Remove o primeiro item do array (altera o proprio array)
lista.shift()
let res5 = lista;
console.log(res5)

//Adiciona item ao array (no final)
lista.push('Manteiga')
let res6 = lista;
console.log(res6)

//Substituir item no array (se você colocar uma posição que ainda não existe no array, ele adiciona como novo)
lista[0] = 'Ovos'
let res7 = lista;
console.log(res7)
//Dica: se não sabemos o tamanho do array, para adicionar no final, fazemos: lista [lista.length] = ' ' *NÃO RECOMENDADO.

//Apagar itens do array
lista.splice(1, 1) //a partir de qual posição quer remover, numero de itens para remover 
let res8 = lista;
console.log(res8)
//**Se passar só um parametro, ele começa a apagar a partir dele e remove tudo que tiver em frente**

//Concatenar dois arrays
let lista2 = ['Liquidificador', 'Forno', 'Forma']
let res9 = lista.concat(lista2)
console.log(res9)

//Ordernar o array (ordem alfabetica)
lista.sort()
lista.reverse() //usar reverse() após o sort() para deixar em ordem decrescente
let res10 = lista
console.log(res10)

//Inverter a ordem das posições do array (o item da ultima posição vai para para 0 e assim sucessivamente)
lista.reverse()
let res11 = lista
console.log(res11)

//Roda uma função em cada item do array, mapeia o array e gera um novo
//Neste exemplo, um novo array é criado e após a execução da função, que multiplica o item por 2, o resultado é inserido no novo array 
let listanumeros = [45, 4, 9, 16, 25]
let listanumeros2 = []

listanumeros2 = listanumeros.map(function (item) { //Passa como parametro o proprio item
    return item * 2
})
let resn = listanumeros2
console.log(resn)

//Roda uma função em cada item do array, e retorna true ou false (no que retornar true, vai pra dentro do novo array, o que retornar false não vai)
//Neste exemplo, queremos pegar apenas os itens que forem menores que 20
listanumeros2 = listanumeros.filter(function (item) {
    return (item < 20) ? true : false
})
let resn2 = listanumeros2
console.log(resn2)

//Roda uma função em cada item do array, e retorna true se TODOS respeitarem a condição ou false se PELO MENOS UM não respeitar a condição
listanumeros2 = listanumeros.every(function (item) { //Passa como parametro o proprio item
    return (item > 20) ? true : false
})
let resn3 = listanumeros2
console.log(resn3)

//Roda uma função em cada item do array, e retorna true se PELO MENOS UM respeitar a condição ou false se TODOS não respeitarem a condição
listanumeros2 = listanumeros.some(function (item) { //Passa como parametro o proprio item
    return (item > 20) ? true : false
})
let resn4 = listanumeros2
console.log(resn4)

//Retorna o primeiro item que ele encontrar, que satisfaça a condição
let listadeusuarios = [
    {id: 1, nome: 'Thay', sobrenome: 'França'},
    {id: 2, nome: 'Guilherme', sobrenome: 'Fernandes'},
    {id: 3, nome: 'Justin', sobrenome: 'Bieber'}
]

let pessoa = listadeusuarios.find(function (item) {
    return (item.sobrenome == 'Bieber') ? true : false
})
let resuser = pessoa
console.log(pessoa)
//Para retornar a posiçao do item, usamos findIndex()

