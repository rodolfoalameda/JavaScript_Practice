function valorDecimalDinheiro(num) {
    template = `R$: ${num.toFixed(2).toString().replace('.', ',')}`
    console.log(template)
}

valorDecimalDinheiro(0.1 + 0.2)