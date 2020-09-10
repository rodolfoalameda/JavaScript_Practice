function criarImovel(tipo, imobiliaria, pavimentos, quartos, suites, banheiros, metrosQuadrados, elevador, piscina, quadra, ) {
    return {
        tipo,
        imobiliaria,
        pavimentos,
        quartos,
        suites,
        banheiros,
        metrosQuadrados,
        elevador,
        piscina,
        quadra,

        calculaPreco() {
            let precoBase = metrosQuadrados * 5000
            let andar = 5
            while (andar < pavimentos) {
                precoBase += 2000
                andar++
            }
            if (elevador) {
                precoBase += 2500
            }
            if (piscina) {
                precoBase += 2500
            }
            if (quadra) {
                precoBase += 2500
            }

            return `Este imovel custa ${precoBase}`
        }
    }
}

const imovel1 = criarImovel('apartamento', 'remax', 7, 3, 2, 2, 150, true, false, false)
console.log(imovel1.calculaPreco())

const imovel2 = criarImovel('casa', 'remax', 0, 1, 0, 1, 75, false, false, false)
console.log(imovel2.calculaPreco())