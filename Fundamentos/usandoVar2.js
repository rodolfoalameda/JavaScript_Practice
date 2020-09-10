var a = 9999
{
    {
        {
            var a = 1
            console.log('Dentro: ' + a)
        }
    }
}
console.log('Fora: ' + a)

//Exemplo claro de override por ser uma var global

