module.exports = {Pessoa}

class Pessoa {
    constructor(nome, idade, peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    falar(){
        return 'oi eu sou o goku'
    }

    teste(){
        return 'funcionou'
    }

    falar2(){
        return `eu tenho ${this.idade} anos e peso ${this.peso} quilos`
    }
}

