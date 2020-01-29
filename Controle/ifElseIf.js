Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultador = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
    }
    else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }
    else if( nota.entre(4, 6.99)){
        console.log('Recuperação')
    }
    else if(nota.entre(0,3.99)){
        console.log('Reprovado')
    }
    else{
        console.log('Nota Inválida')
    }
}

imprimirResultador(10)
imprimirResultador(8.9)
imprimirResultador(6.55)
imprimirResultador(2.3)
imprimirResultador(-1)
imprimirResultador(11)