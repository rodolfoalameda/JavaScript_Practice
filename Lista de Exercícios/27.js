function taxaDeCrescimento(altura1, taxa1, altura2, taxa2) {
    let contador = 0
    let menorAltura = 0
    let maiorAltura = 0
    let taxaCorrigida1 = 0
    let taxaCorrigida2 = 0
    if (altura1 < altura2) {
        menorAltura = altura1
        maiorAltura = altura2
        taxaCorrigida1 = taxa1
        taxaCorrigida2 = taxa2

    } else {
        menorAltura = altura2
        maiorAltura = altura1
        taxaCorrigida2 = taxa1
        taxaCorrigida1 = taxa2
    }

    while (menorAltura < maiorAltura) {
        menorAltura += taxaCorrigida1
        maiorAltura += taxaCorrigida2
        contador++
    }

    console.log(`A criança igualou/passou depois de ${contador} anos.`)

}

taxaDeCrescimento(170, 2, 168, 3)
taxaDeCrescimento(155, 5, 170, 1)