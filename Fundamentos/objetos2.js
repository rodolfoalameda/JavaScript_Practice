console.log(typeof Object)
console.log(typeof new Object)

function teste() {
        
}

console.log(typeof teste)
console.log(typeof new teste)

class Produto {}

console.log(typeof Produto)
console.log(typeof new Produto)

//Tudo é funcao no js, existe apenas alguns detalhes que surgem
//quando se declara com o new, pois ali esta sendo instanciado
//um objeto daquele tipo, mas ainda assim usando a funcao como 'lei'
//é possivel instanciar objetos e funcoes passando seus atributos 