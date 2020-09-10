const peso1 = 1.0;
const peso2 = Number('2.2');

//console.log(peso1, peso2);
//console.log(Number.isInteger(peso1));
//console.log(Number.isInteger(peso2));

const avaliacao1 = 8.45;
const avaliacao2 = 7.0;

const total = (peso1 * avaliacao1 + peso2 * avaliacao2);
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));