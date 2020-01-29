// um map serve para tranformar um array em outro 

const numero = [1, 2, 3, 4, 5]


// Map é um FOR ocm propósito

let resultado = numero.map(function (e){
    return e * 2
})

console.log(resultado, numero)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `${parseFloat(e).toFixed(2).replace('.',',')}`
resultado = numero.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)