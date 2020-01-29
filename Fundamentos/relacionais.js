console.log('01)','1'== 1) //o resultado é true pois compara o valo

console.log('02)','1' === 1) // o resultado é falso, pois um é caracter e o outro é número

console.log('03)','3' != 3) // o resultado é falso, pois o valor dos dois é igual

console.log('04)','3' !== 3) // o resulado é verdadeiro, pois um é caracter e o outro é numero. São diferentes

console.log('05)',3 < 2)

console.log('06)', 3 > 2)

console.log('07)', 3 <= 2)

console.log('08)', 3 >= 2)


const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)',d1 ==d2)

console.log('10)',d1 === d2)

console.log('11)',d1.getTime() === d2.getTime())


// OBS o == não leva em consideração os tipos, então é mais recomendado usar a comparação restrita que são: ===