const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna a letra de numero 4

console.log(escola.charAt(5)) // retorna um valor vazio igual a Java

console.log(escola.charCodeAt(3)) // valor da letra 3 na tabela ascii

console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // mostra uma substring sem o insice 1
console.log(escola.substring(0,3)) // mostra uma subString de indice 0, até o indice 3-1

console.log('Escola '.concat(escola).concat("!")) // concatenação de Strings

console.log('Escola ' + escola +"!") // concatenação de String 

console.log(escola.replace(3,'e')) // substitui o indice 3 pela letra e

console.log('Ana,Maria,Pedro'.split(',')) // gera um Array separado com virgula