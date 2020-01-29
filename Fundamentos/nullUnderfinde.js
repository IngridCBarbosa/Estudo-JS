let valor // nao inicializada

// undefinde a variavel nem foi inicializada ainda 
console.log(valor)


valor = null // ausencia de valor, não aponta para nenhum local de memória
console.log(valor)
// console.log(valor.toString()) // ERRO!


const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço

console.log(!!produto.preco)

console.log(produto)

/* CONCLUSÕES FINAIS

SE QUER ZERAR UMA REFERÊNCIA USAR O NULL

DEIXAR QUE O UNDEFINED QUEM SETA E DEFINE ISSO É A LINGUAGEM 


*/