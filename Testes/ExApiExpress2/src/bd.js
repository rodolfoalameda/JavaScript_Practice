const sequencia = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const familia = {}

function addFamiliar(pessoa) {
    if(!pessoa.id) pessoa.id = sequencia.id
    familia[pessoa.id] = pessoa
    return pessoa
}

function getFamiliar(id){
    return familia[id] || {}
}

function getTodaFamilia(){
    return Object.values(familia)
}

function deletarFamiliar(id){
    delete familia[id]
}

module.exports = {addFamiliar, getFamiliar, getTodaFamilia, deletarFamiliar}