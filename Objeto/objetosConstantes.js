// pessoa -> 123 -> {...}
const pessoa = {nome:'Joao'}

pessoa.nome = 'Pedro'

console.log(pessoa)


// pessoa vai receber um novo objeto que esta em um endenreco 456 

//pessoa = {nome:'Ana'}

Object.freeze(pessoa) // não consegue mexer no obeto

pessoa.nome = 'Maria'
console.log(pessoa.nome)


const pessoaConstante  = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Pedro'
console.log(pessoaConstante)