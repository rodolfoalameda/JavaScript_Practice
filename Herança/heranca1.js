// const avo = {
//     atributo1: 1
// }

// const pai = {
//     __proto__: avo,
//     atributo2: 2
// }

// const filho = {
//     __proto__: pai,
//     atributo3: 3
// }


// console.log(avo.atributo1)
// console.log(pai.atributo1, pai.atributo2)
// console.log(filho.atributo1, filho.atributo2, filho.atributo3)

//Os objetos vão herdando em cascata ate o ancestral maximo;
//Note que filho herdou tudo;
//Atributo1 não existe em filho, então o node procura no proximo ancestral e assim por diante, até achar;

const carro = {
    velocidadeAtual: 0,
    velocidadeMax: 0,

    acelerar(delta){
        if(this.velocidadeAtual + delta <= this.velocidadeMax){
            this.velocidadeAtual = delta
        } else {
            this.velocidadeAtual = this.velocidadeMax
        }
    },

    status(){
        return `velocidade ${this.velocidadeAtual} de ${this.velocidadeMax} `
    }
}

const ferrari = {
    modelo: 'f40',
    velocidadeMax: 324,

    //sobrescrita do status

    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

const uno = {
    modelo: 'mille',
    velocidadeMax: 120,

    //sobrescrita do status

    status(){
        return 'nao vai dar nao'
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(uno, carro)

//A partir daqui, ferrari e uno herdam atributos e metodos de carro;
//Note que as velocidades foram sobrescritas; @override (Java)

console.log(ferrari)
console.log(uno)

ferrari.acelerar(400)
console.log(ferrari.status())

uno.acelerar(55)
console.log(uno.status())


