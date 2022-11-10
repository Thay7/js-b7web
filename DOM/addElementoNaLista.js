//Adicionar elementos na lista

//Pegando elementos que iremos usar 
const input = document.querySelector('input')
const lista = document.querySelector('ul')

//Função para adicionar elementos
function handleKeyUp(e) { 
    if(e.key === 'Enter') {
        const newLi = document.createElement('li') //Criando o novo item da lista e atribuindo a uma variável
        newLi.innerHTML = input.value //Passando para dentro do elemento novo o texto que o usuario digitou
        lista.appendChild(newLi) //Adicionando o novo elemento na lista

        input.value = '' //Limpando o campo de texto
    }
}

//Adição de evento no elemento input
input.addEventListener('keyup', handleKeyUp)
