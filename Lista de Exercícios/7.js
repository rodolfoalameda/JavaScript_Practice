function calculaEquacao2grau(a, b, c) {

    let delta = Math.pow(b, 2) - (4 * a * c)
    if (delta >= 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log('x1 = ' + x1)
        console.log('x2 = ' + x2)
    } else {
        console.log('Não possui raizes reais.')
    }

}

calculaEquacao2grau(4, -4, 1)
calculaEquacao2grau(1, -4, 5)
calculaEquacao2grau(1, -5, 6)