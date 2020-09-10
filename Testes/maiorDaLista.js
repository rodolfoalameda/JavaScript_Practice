let lista = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < lista.length; i++) {
    maior = lista[0]
    if (lista[i] > maior) {
        maior = lista[i]
    }
}

console.log(maior)