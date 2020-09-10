// function sistemaInterpol() {
//     return {
//         lista: [],

//         adicionaProcurado(nome) {
//             this.lista.push(nome)
//         },

//         ehProcurado(nome) {
//             for (let i = 0; i < this.lista.length; i++) {
//                 if (this.lista[i] === nome) {
//                     return true
//                 } else {
//                     return false
//                 }
//             }
//         }
//     }
// }

// const sistema1 = sistemaInterpol()
// sistema1.adicionaProcurado('rodolfo')
// sistema1.adicionaProcurado('eudo')
// sistema1.adicionaProcurado('laura')
// console.log(sistema1.ehProcurado('rodolfo'))
// console.log(sistema1.ehProcurado('malaquias'))


class SistemaInterpol {
    constructor() {
        this.listaProcurado = []

        this.adicionaProcurado = function (nome) {
            this.listaProcurado.push(nome)
        }

        this.ehProcurado = function (nome) {
            for (let i = 0; i < this.listaProcurado.length; i++) {
                if (this.listaProcurado[i] === nome) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
}

const sistema2 = new SistemaInterpol()
sistema2.adicionaProcurado('rodolfo')
sistema2.adicionaProcurado('eudo')
sistema2.adicionaProcurado('laura')
console.log(sistema2.listaProcurado)
console.log(sistema2.ehProcurado('rodolfo'))
console.log(sistema2.ehProcurado('malaquias'))