// Forma literal

// const Carro = {
//     nome: 'Uno',
//     marca: 'Fiat',
//     valor: 38000
// }

// console.log(Carro)

// A partir de um construtor 

function Carro2(nome, marca, valorBase, chassi) {
    this.nome = nome
    this.marca = marca
    this.valorBase = valorBase /*o this aqui torna os atributos publicos*/
    /* note que o chassi está encapsulado, pois nao foi declarado*/

    this.getChassi = function () {
        return chassi
    }

    this.valorTotal = function (simOUnao) {
        if (simOUnao == 'sim') {
            return this.valorBase = valorBase * 0.9
        } else if (simOUnao == 'nao') {
            return valorBase
        }
    }

  
}

// const c2 = new Carro2('uno', 'fiat', 38000, 'apk1228')
// //console.log(c2)
// console.log(c2.valorTotal('sim'))
// console.log(c2.valorTotal('nao'))
// console.log(c2.getChassi())


// forma factory

function Carro3(nome, marca, valorBase, chassi) {
    return {
        nome,
        marca,
        valorBase,

        getChassi() {
            return chassi
        },

        valorTotal(simOUnao) {
            if (simOUnao == 'sim') {
                return this.valorBase = valorBase * 0.9
            } else if (simOUnao == 'nao') {
                return valorBase
            }
        }
    }
}

const c3 = Carro3('uno', 'fiat', 38000, 'apk1228')
console.log(c3.getChassi())
console.log(c3.valorTotal('sim'))
console.log(c3.valorTotal('nao'))

// funcao factory bem mais tranquila