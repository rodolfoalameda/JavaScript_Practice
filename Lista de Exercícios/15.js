function compraCarro(modelo) {
    switch(modelo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan': case 'moto': case 'caminhonete':
            console.log('Não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este modelo')
    }
}

compraCarro('hatch')
compraCarro('moto')
compraCarro('asd')