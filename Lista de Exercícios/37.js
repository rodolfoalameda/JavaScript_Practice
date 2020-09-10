function progressaoAritimetica(n, a1, r) {
    let resultado = a1 + (n - 1) * r
    console.log(resultado)
}

progressaoAritimetica(5, 2, 2)

function progressaoGeometrica(n, a1, r) {
    let resultado = a1 * Math.pow(r, n - 1)  
    console.log(resultado)
}   

progressaoGeometrica(5, 3, 4)