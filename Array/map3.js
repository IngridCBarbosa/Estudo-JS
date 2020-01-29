const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]


Array.prototype.meuMap = function(callback){
    const array = []
    for(let i = 0; i < this.length;i++){
        array.push(callback(this[i],i,this))
    }
    return array 
}

// retornar um array apenas com os precos

const paraObejto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.meuMap(paraObejto).meuMap(apenasPreco)
console.log(resultado)