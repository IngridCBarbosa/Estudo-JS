const obj = {
    a:1,
    b:2,
    c:3,
    soma() {
        return a + b + c
    }
}

// JSON É UMA FORMATO DE DADOS
// UM FORMATO TEXTUAL   
console.log(JSON.stringify(obj))

///console.log(JSON.parse("{a: 1, b : 1, c: 3}"))

//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3" ))

console.log(JSON.parse('{ "a": 1, "b": 2,"c": 3 }'))

console.log(JSON.parse('{ "a": 1, "b": "texto assim", "c": 2 }'))