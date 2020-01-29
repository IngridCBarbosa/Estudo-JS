
// ARRAY DECLARADO DE FORMA LITERAL
// LEMBRANDO QUE O ARRAY EM JAVASCRIPT NÃO TEM NUMERO FIXO DE TAMANHA
// E  MUITO MENOS TIPAGEM ASSOCIADA A ELE
const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4]) // retorna undefined


//adicionando valores no array
valores[4] = 10
console.log(valores)

console.log(valores.length) // quanto elementos tem no array

// adicionando valores no array utilizando push

valores.push({id: 3},false,null,'teste')
console.log(valores)

// remove o ultimo valor adicionado do array
console.log(valores.pop())

// outra forma de remover valores de um array

delete valores[0]
console.log(valores)

console.log(typeof valores)

// em JAVASCRIPT UM ARRAY É UM OBJETO