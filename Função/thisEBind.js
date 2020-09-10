const pessoa = {
    nome: 'Rodolfo',
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }

}

// pessoa.falar()

// const falar = pessoa.falar
// falar()

// Aponta para um this diferente do objeto

const falar2 = pessoa.falar.bind(pessoa)
// Com o bind, eu garanto que o this vai apontar para o objeto que quero

falar2()