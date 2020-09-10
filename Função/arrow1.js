saudacao = () => 'Ola'

console.log(saudacao())

//Arrow functio. Bem pequena, prática.
//() indicam que não ha parametros
//O retorno esta implicito

soma = (num1, num2) => num1 + num2
console.log(soma(1, 2))

//Parametros passados, e retorno implicito

soma2 = (num1, num2) => {
    return num1 + num2
}

console.log(soma2(1, 4))
console.log(typeof(soma2))

//Pode-se passar o restante da arrow dentro de chaves também

