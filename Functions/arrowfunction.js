let arrowfunction = (a, b) =>  {
    return a + b
}
arrowfunction()

//Se o codigo tiver so uma linha, podemos fazer uma expressao direta(sem o return):
let  expressaoDireta = (x,y) => x + y
expressaoDireta()

//Se a função tiver só um parametro, é opcional usar o () no parametro:
let letrasNoNome = nome => nome.length
letrasNoNome()

