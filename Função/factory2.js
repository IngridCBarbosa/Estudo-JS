function criarProduti(nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduti('Notebook',2199.49))
console.log(criarProduti('iPad',1199.49))