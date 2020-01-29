const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome:'maria',nota: 9.8}
]

// Imperativo

let total = 0

for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

// declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)