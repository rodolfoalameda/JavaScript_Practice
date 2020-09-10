const array1 = ['agua', 'terra', 'sol', 'lua', 'bola', 'chuva']
const array2 = ['agua', 'marte', 'sol', 'chuva', 'terremoto', 'CHUVA', 'bola']
const concat = []

for (let i = 0; i < array1.length ; i++) {
    for (let j = 0; j < array2.length ; j++) {
        if (array1[i].toLowerCase() === (array2[j])) {
            concat.push(array1[i]);
        }
    }
}
console.log(concat)