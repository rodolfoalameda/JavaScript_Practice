function escreveNumero(num) {
    switch(num) {
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        default: 
            console.log('Numero fora do intervalo.')
    }
}

escreveNumero(0)
escreveNumero(1)
escreveNumero(2)