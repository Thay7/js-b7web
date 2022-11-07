function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true 
    } else {
        return false
    }
}

let usuario = 'thay'
let senha = '321'
let validacao = validar(usuario, senha)

if(validacao) {
    console.log('Acesso concedido.')
} else {
    console.log('Acesso NEGADO!')
}