// Filter reforna um array menor 

// filtra um array


function geraObj(nome,preco,fragil) {
    const Produto = {}
    Produto.nome = nome
    Produto.preco = preco
    Produto.fragil = fragil
    return Produto
}

const bj1 = geraObj('Notebook',2499,true)
const bj2 = geraObj('iPad',4199,true)
const bj3 = geraObj('Copo de Vidro',12.49,true)
const bj4 = geraObj('Codo de platico',18.99,false)
const produtos = [bj1,bj2,bj3,bj4]

console.log(produtos.filter(function(produto){
    return produto.preco >= 500 && produto.fragil === true
}))

const caro = p => p.preco >= 500
const fragil = p => p.fragil == true
const produtoCaro = produtos.filter(caro).filter(fragil)
console.log(produtoCaro)
