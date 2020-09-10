// anuidade para o ex vale 100

function calculaAnuidade(mes) {
    let juroComposto = 0
    switch(mes) {
        case 1:
            return 'O valor da sua anuidade é 100.00'
            break
        case 2:
            juroComposto = 100 * Math.pow((1 + (5/100)), 1)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 3:    
            juroComposto = 100 * Math.pow((1 + 0.05), 2)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 4: 
            juroComposto = 100 * Math.pow((1 + 0.05), 3)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 5:
            juroComposto = 100 * Math.pow((1 + 0.05), 4)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 6:
            juroComposto = 100 * Math.pow((1 + 0.05), 5)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 7:
            juroComposto = 100 * Math.pow((1 + 0.05), 6)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 8:
            juroComposto = 100 * Math.pow((1 + 0.05), 7)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 9:
            juroComposto = 100 * Math.pow((1 + 0.05), 8)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 10:
            juroComposto = 100 * Math.pow((1 + 0.05), 9)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 11:
            juroComposto = 100 * Math.pow((1 + 0.05), 10)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        case 12:
            juroComposto = 100 * Math.pow((1 + 0.05), 11)
            return `O valor da sua aniuidade é ${juroComposto.toFixed(2)}`
            break
        default:
            console.log('Mês invalido')
    }
}

console.log(calculaAnuidade(1))
console.log(calculaAnuidade(11))
console.log(calculaAnuidade(12))
console.log(calculaAnuidade(2))