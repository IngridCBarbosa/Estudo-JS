// par nome/valor

const saudacao = 'opa' // contexto Léxico 1

function exec(){
    const saudacao = 'Fala' // contexto Léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor

const Cliente ={
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro:'rua muito lefal',
    }
}

console.log(saudacao)
console.log(exec())