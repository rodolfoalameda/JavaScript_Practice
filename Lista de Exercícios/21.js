function planoDeSaude(idade) {
    if (idade < 10) {
        console.log('Mensalidade = 180')
    } else if (idade >= 10 && idade < 30) {
        console.log('Mensalidade = 150')
    } else if (idade >= 30 && idade < 60) {
        console.log('Mensalidade = 210')
    } else if (idade >= 60) {
        console.log('Mensalidade = 250')
    }

}

planoDeSaude(8)
planoDeSaude(99)
planoDeSaude(37)