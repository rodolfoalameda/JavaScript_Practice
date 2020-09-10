const jogadores = ['navas', 'ramos', 'pepe', 'kross', 'modric', 'cr7']

jogadores.pop() // remove ultimo elemento
console.log(jogadores)

jogadores.push('cr7')
console.log(jogadores) //add elemento no ultimo indice

jogadores.shift()
console.log(jogadores) //remove o primeiro indice

jogadores.unshift('courtois') //adiciona no primeiro indice
console.log(jogadores)

jogadores.splice(2, 1) // remove do indice indicado em diante (nº paramentro)
console.log(jogadores)

const jogadores2 = jogadores.slice(3) //pega o array a partir do indice x
console.log(jogadores2)

const jogadores3 = jogadores.slice(0, 3) //pega o array a partir do indice x, vai ate y - 1
console.log(jogadores3)