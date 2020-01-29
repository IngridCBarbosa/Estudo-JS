const nome = 'Rebeca'

const concatenacao =  'Olá' + nome + '!'

// Como fazer no template String e seus benefícios 

//utilizando template String

const template = `
    Olá
    ${nome}!` // essa ${} é o template String 

console.log(concatenacao,template)

// expressoes...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cudado')}!`)  