// Object.prevemtExtensions

const produto = Object.preventExtensions({
    nome:'S',
    preco: 1.99,
    tag:'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não consegue adicionar novos atributos com PREVENTEXTENSIONS
delete produto.tag
console.log(produto)

// Object.seal

const Pessoa = {
    nome:'Jeronimo',
    idade: 13

}
Object.seal(Pessoa)
console.log('Selado: ',Object.isSealed(Pessoa))
delete Pessoa.nome // NÃO CONSEGUE DELETAR 
Pessoa.sobrenome = 'Silva' // NEM ADICIONAR
Pessoa.idade = 14 // SÓ CONSEGUE MODIFICAR OS ATRIBUTOS EXISTENTES COM O Object.seal()
console.log(Pessoa)

//Object.freeze = selado + valores constantes

// NÃO CONSEGUE ALTERAR , NEM ADICIONAR , NEM EXCLUIR ATRIBUTOS 