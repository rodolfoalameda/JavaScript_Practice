//Um escopo a mais que o var;
// Note que ele pode ter escopo global, de funcao e de bloco de cod.

let numero = 1;
console.log(numero)
{
    {
        numero = 3
        console.log(numero)
    }
}

// n ha conflito entre os nomes por estarem em
// escopos diferentes 