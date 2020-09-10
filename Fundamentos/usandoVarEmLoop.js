for(var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =  ' + i)

//Note que por var não ter escopo de bloco
//o i fica visivel fora do loop

const lista = []

for (var i = 0; i < 10; i++){
    lista.push(function(){
        console.log(i)
    })
}

lista[3]()
lista[8]()

//note que aqui o problema de escopo de bloco persiste;
// as duas funções invocadas passaram como parametro 10
// e essa não era nossa intencao 