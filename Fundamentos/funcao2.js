// ARMAZENANDO UMA FUNCOA EM UMA VARIAVEL


const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2,3)

// ARMAZENANDO UMA FUNCAO ARROW EM UMA VARIAVEL
 // a setinha substitui a nome fuction
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))


// RETORNO IMPLÍCITO

const subtracao = (a,b) => a - b

console.log(subtracao(2,3))

const imprime2 = a => console.log(a)
imprime2('Massa!')