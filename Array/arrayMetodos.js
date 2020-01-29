const piloto = ['vettel','Alonso','Raikkonen','Massa']

console.log(piloto)

// remove o ultimo elemento do array
piloto.pop() // massa quebrou o carro!
console.log(piloto)

// adiciona dado na ultima posição
piloto.push('Vestappen')
console.log(piloto)

// remove o primeiro elemento do array
piloto.shift()
console.log(piloto)

// adiciona dado ao primeiro elemento

piloto.unshift('Hamilton')
console.log(piloto)

// splice pode adicionar e remover elementos do array
// adicionando
piloto.splice(2,0,'Bottas','Massa')
console.log(piloto)


// remover

piloto.splice(3,1)
console.log(piloto)

const algunsPilotod = piloto.slice(2) // gera novo array, nesse exemplo pega dados a partir do indice 2
console.log(algunsPilotod)

// pega elementos do array Original do indice 1 ao indice 3
const algunsPilotod2 = piloto.slice(1,4)
console.log(algunsPilotod2)
