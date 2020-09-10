class PostoGasolina {
    constructor(alcool, gasolina) {
        this.alcool = alcool
        this.gasolina = gasolina

        this.getRecomendacao = function (alcool, gasolina) {
            let valor = gasolina * 0.7
            if (valor < alcool) {
                return 'abasteca com alcool'
            } else if(valor > alcool) {
                return 'abasteca com gasolina'
            } else {
                return 'empate'
            }
        }
    }
}

const ipiranga = new PostoGasolina(2.59, 3.70)
console.log(ipiranga.getRecomendacao(ipiranga.alcool, ipiranga.gasolina))
