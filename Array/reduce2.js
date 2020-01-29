const alunos = [
    {nome:'Joao Pedro', nota: 10.0, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7,bolsista: true}
]

// Desafio 1: Todos os alunos são bolsista?

//Desafio 2: Algum aluno é bolsista?

// DESAFIO 1
const bolsista = (resultado, bolsista) => resultado && bolsista

const todosSaoBolsistas = alunos.map( aluno => aluno.bolsista).reduce(bolsista)

console.log(todosSaoBolsistas)


// DESAFIO 2

const algumBolsista = (resultado, bolsista) => resultado  || bolsista

const peloMenoUmBolsista = alunos.map(aluno => aluno.bolsista).reduce(algumBolsista)
console.log(peloMenoUmBolsista)