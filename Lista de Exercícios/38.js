function impares(min, max) {
    if (min > max) {
        for (let i = max; i < min; i++) {
            if (i % 2 !== 0) {
                console.log(i)
            }
        }
    } else {
        for (let i = min; i < max; i++) {
            if (i % 2 !== 0) {
                console.log(i)

            }
        }
    }
}

impares(100, 1)
impares(1, 100)