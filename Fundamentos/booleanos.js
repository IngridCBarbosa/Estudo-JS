let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// boolean com o numero 1
isAtivo = 1
console.log(!!isAtivo) // colocando !! duas exclamação fica verdaderio, colocando ! é falso
// o valor 1 se comporta com ovalor verdadeiro

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!(''|| null || 0||' '))

console.log(('' || null || 0 || 'epa')) // retorna o único valor verdadeiro

let nome = ''

console.log(nome || 'Desconhecido')

nome = 'Lucas'

console.log(nome || 'Desconhecido')