var rockets = [{
        country: 'Russia',
        launches: 32
    },
    {
        country: 'US',
        launches: 23
    },
    {
        country: 'China',
        launches: 16
    },
    {
        country: 'Europe(ESA)',
        launches: 7
    },
    {
        country: 'India',
        launches: 4
    },
    {
        country: 'Japan',
        launches: 3
    }
];

// let testaMap = rockets.map(function(elemento){
//     if(elemento.country.charAt(0) !== 'R'){
//         return elemento
//     }
// })

// console.log(testaMap)

//Perceba que o map retorna um array com elementos 'undefined'. Melhor abordagem seria o filter

// let testaFilter = rockets.filter(function(elemento){
//     if(elemento.country.charAt(0) === 'R'){
//         return elemento
//     }
// })

// console.log(testaFilter)

let testaReduce = rockets.map(r => r.launches).reduce(function(soma, elemento){
    console.log(soma, elemento)
    return soma + elemento
},0)

console.log(testaReduce)