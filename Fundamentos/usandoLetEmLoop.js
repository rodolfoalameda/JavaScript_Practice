//for (let i = 0; i < 10; i++) {
//    console.log(i)
//}

//console.log('i =' + i)

//note que agora o i nao está visivel,
//pois este tem escopo de bloco (declarado com let)

const lista = []

for (let i = 0; i < 10; i++) {
    lista.push(function(){
        console.log(i)
    })
}

lista[2]()
lista[8]()

//agora sim, podemo ver que o i foi passado corretamente
//porque o let tem variavel de bloco;