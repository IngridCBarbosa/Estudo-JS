const a = 1
const b = 2
const c = 3

const obj1 = {a: a,b:b,c:c}

const objt2 = {a,b,c}

console.log(obj1,objt2)

const nomeAttr = 'nota'
const valorAttr = 7.89

const obj3 = {}

obj3[nomeAttr] =  valorAttr
console.log(obj3)

const objt4 ={[nomeAttr]:valorAttr}
console.log(objt4)

const objt5 = {
    funcao1: function() {
        //...
    },
    // nova forma
    funcao2() {
        //...
    }
}
console.log(objt5)
