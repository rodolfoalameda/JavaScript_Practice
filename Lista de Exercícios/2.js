function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 == lado3) {
        console.log('Tipo do triangulo: Equilatero')
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log('Tipo do triangulo: Isoceles')
    } else {
        console.log('Tipo do triangulo: Escaleno')
    }
}

tipoTriangulo(1, 1, 1)
tipoTriangulo(1, 6, 1)
tipoTriangulo(2, 7, 6)