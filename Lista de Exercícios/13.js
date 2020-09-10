
function semanaOuFds(dia) {
    switch(dia) {
        case 2: case 3: case 4: case 5: case 6:
            console.log('Semana')
            break
        case 7: case 1:
            console.log('Final de semana')
            break
        default:
            console.log('Numero nao corresponde a dia')
    }
}

semanaOuFds(2)
semanaOuFds(6)
semanaOuFds(1)
semanaOuFds(99)

