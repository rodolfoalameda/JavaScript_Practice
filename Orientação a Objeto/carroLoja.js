function Carro(nome, marca, cor, portas, vidroEletrico, arCondicionado, precoBase) {
    return {
        nome,
        marca,
        cor,
        portas,
        vidroEletrico,
        arCondicionado,
        precoBase,

        calculaPreco() {
            switch (cor) {
                case 'branco':
                case 'azul':
                case 'preto':
                case 'vermelho':
                    precoBase += 0
                    break

                default:
                    precoBase += 1000
                    break
            }

            if (vidroEletrico) {
                precoBase += 1250
            }
            if (arCondicionado) {
                precoBase += 1250
            }

            return this.exibeCarro()
        },

        exibeCarro() {
            return `Carro: ${nome}  
            marca: ${marca}
            cor: ${cor}
            portas: ${portas}
            Vidro Eletrico: ${vidroEletrico}
            Ar: ${arCondicionado} 
            Preço: ${precoBase}`
        }
    }
}

// const c1 = Carro('palio', 'fiat', 'prata', 2, false, false, 35000)
// console.log(c1.calculaPreco())

const c2 = Carro('gol', 'volkswagen', 'preto', 4, true, true, 55000)
console.log(c2.calculaPreco())