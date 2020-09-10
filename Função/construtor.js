//Apenas testes, preciso entender melhor o this no construtor

function Carro(velocidadeMaxima, delta) {
    this.velocidadeMaxima = velocidadeMaxima
    this.delta = delta
    let velocidadeAtual = 0

    this.aceleraCarro = function () {
        if (velocidadeAtual <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro(200, 5)
console.log(uno)
// console.log(uno.velocidadeMaxima)
// console.log(uno.delta)

// uno.aceleraCarro()
// uno.aceleraCarro()
// console.log(uno.getVelocidadeAtual())
