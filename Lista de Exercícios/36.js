let array = [1, 2, 3]

function multiplicaNoArray(array, int) {
    let resposta = []
    for (let i = 0; i < array.length; i++) {
        resposta.push(array[i] * int)
    }
    console.log(resposta)
}

multiplicaNoArray(array, 2)

function multiplicaNoArray2(array, int) {
    let resposta = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            resposta.push(array[i] * int)
        }
    }
    console.log(resposta)
}

multiplicaNoArray2(array, 2)