console.log(Math.ceil(6.1))

const objt1 =  {}

objt1.nome = "Bola"

console.log(objt1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')

const obj3 = new Obj('Mesa')

console.log(obj2)
console.log(obj3)