//Tudo é função! Coloque isso na cabeça

function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3)

function somaValores(a, b) {
    return a + b
}

somaValores(1, 8)
console.log(somaValores(8, 17))

// Podemos também armazenar funcoes em uma variável, exemplo:

const imprimeSoma2 = function (a, b) {
    console.log(a + b)
}

imprimeSoma2(2, 99)