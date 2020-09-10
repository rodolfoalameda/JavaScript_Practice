class Carro {
    constructor(id, nome, marca, cor, preco) {
        this.id = id
        this.nome = nome
        this.marca = marca
        this.cor = cor
        this.preco = preco
    }
}

class LojaDeCarro {
    constructor() {
        this.carrosDisponiveis = []
        this.carrosVendidos = []

        this.adicionaCarro = function (Carro) {
            this.carrosDisponiveis.push(Carro)
        }

        this.exibeCarrosDisponiveis = function () {
            return this.carrosDisponiveis
        }

        this.exibeCarrosVendidos = function(){
            return this.carrosVendidos
        }

        this.venderCarro = function (id) {
            for(let i = 0; i < this.carrosDisponiveis.length; i++){
                if(this.carrosDisponiveis[i].id === id){
                    this.carrosVendidos.push(this.carrosDisponiveis[i])
                    let index = this.carrosDisponiveis.indexOf(this.carrosDisponiveis[i])
                    this.carrosDisponiveis.splice(index, 1)
                }
            }
        }

        this.colocarEmPromocao = function(id) {
            for(let i = 0; i < this.carrosDisponiveis.length; i++){
                if(this.carrosDisponiveis[i].id === id){
                    let novoPreco = this.carrosDisponiveis[i].preco * 0.85
                    this.carrosDisponiveis[i].preco = novoPreco
                }
            }
        }

        this.apuradoVendido = function(){
            let total = 0
            for(let i = 0; i < this.carrosVendidos.length; i++){
                total += this.carrosVendidos[i].preco
            }
            return `O total de vendas foi de ${total}`
        }

        this.limparVendidos = function(){
            let novaLista = []
            this.carrosVendidos = novaLista
        }

    }
}

const c1 = new Carro(1, 'uno', 'fiat', 'preto', 28000)
const c2 = new Carro(2, 'gol', 'volkswagen', 'branco', 10000)
const vdcar = new LojaDeCarro



vdcar.adicionaCarro(c1)
vdcar.adicionaCarro(c2)
vdcar.colocarEmPromocao(1)
vdcar.venderCarro(1)
vdcar.venderCarro(2)
vdcar.limparVendidos()
console.log(vdcar.exibeCarrosVendidos())





