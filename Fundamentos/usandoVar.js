//Variaveis criadas com o var se tornam de uma certa forma globais
//exceto dentro do escopo de um funcao, por exemplo.

{
    {
        {
            var a = 123
            console.log(a)
        }
    }
}
console.log(a)

//Exemplo de um var global;

function teste() {
    var b = 456
    console.log(b)
}   
//console.log(b) Não consegue pegar pq foge do escopo da funcao
teste()

