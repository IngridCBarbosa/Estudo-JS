Array.prototype.meuFilter = function(callback){
    const arrayFilter = []
    for(let i = 0; i < this.length; i++){
       if(callback(this[i],i,this)){
           arrayFilter.push(this[i])
       }
    }
    return arrayFilter
}

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
//console.log(produtos)
const caro = protudo => protudo.preco >= 500
const fragil = produto => produto.fragil == true

const resultado = produtos.meuFilter(caro).meuFilter(fragil)
console.log(resultado)