function bancaDeFruta(fruta) {
    switch (fruta) {
        case 'maca':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Esta faltando')
            break
        case 'melancia':
            console.log('Aqui esta, é 3 reais o quilo')
            break
        default:
            console.log('Erro: Fruta não disponivel')
    }
}

bancaDeFruta('maca')
bancaDeFruta('kiwi')
bancaDeFruta('melancia')