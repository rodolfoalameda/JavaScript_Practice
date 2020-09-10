const lutadores = [{nome: 'subzero', classe: 'mago', fatality: true},
                   {nome: 'jax', classe: 'guerreiro', fatality: false}]

console.log(lutadores.filter(isMago = lutador => lutador.classe === 'mago'))

console.log(lutadores.filter(isFoda = lutador => {
    if(lutador.classe === 'mago' && lutador.fatality){
        return lutador
    }
}))

