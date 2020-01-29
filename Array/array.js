console.log(typeof Array, typeof new Array, typeof [])

let aprovaods = new Array('Bia', 'Carls','Jeronimo')

console.log(aprovaods)


aprovaods = ['bia','Carlos','Jeronimo']
console.log(aprovaods[0])
console.log(aprovaods[1])
console.log(aprovaods[2])
console.log(aprovaods[3])

aprovaods[3] ='Paulo'

console.log(aprovaods[3])

aprovaods.push('Malu')

console.log(aprovaods.length)

aprovaods[9] = 'Rafael'
console.log(aprovaods.length)

console.log(aprovaods[8] === undefined)

console.log(aprovaods)

aprovaods.sort() // ordena o array
console.log(aprovaods)

delete aprovaods[1]
console.log(aprovaods[1])
console.log(aprovaods)


aprovaods = ['bia','Carlos','Jeronimo']
aprovaods.splice(1,1)
console.log(aprovaods)