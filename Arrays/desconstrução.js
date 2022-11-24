let info = ['Thay França', 'Thay', 'França', '@ennylyaht']

//Desconstruindo
//Desconstrução é feita na ordem do array

let [nomeCompleto, nome, sobrenome, instagram] = info
//Damos nomes para cada um dos itens do array, e esses nomes serão as variaveis que guardam os valores correspondentes aos indices

//Se quiser pular algum item
let [, nome2, , instagram2] = info //Deixa vazio

//Descontruir na hora que estiver criando
let [nome3, sobrenome3] = ['Gui', 'Fernandes']

//Podemos colocar um valor padrão para caso não venha o dado, o sistema colocar pra ele, exemplo:

let [nome4, sobrenome4, idade = 21] = ['Gui', 'Fernandes']
