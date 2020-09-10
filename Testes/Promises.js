const niceGrades = true

const newConsole = new Promise((resolve, reject) => {
    if (niceGrades) {
        const console = {
            nome: 'nintendo switch'
        }
        resolve(console)
    } else {
        const naoEstudou = new Error('Não estudou')
        reject(naoEstudou)
    }
})

const notas = function () {
    newConsole
        .then(cumpriu => console.log(cumpriu))
}

notas()