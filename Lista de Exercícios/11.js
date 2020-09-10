function eBissexto(ano) {
    if (ano % 4 === 0) {
        console.log('É bissexto')
        return true
    } else if (ano % 100 === 0 && ano % 400 === 0) {
        console.log('É bissexto')
        return true
    } else {
        console.log('Não é bissexto')
    }
}

console.log(eBissexto(2020))
eBissexto(1829)
eBissexto(1576)

