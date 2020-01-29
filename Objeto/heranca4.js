function MeuObjt() {}

console.log(MeuObjt.prototype)

const obj1 =  new MeuObjt
const obj2 = new MeuObjt

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjt.prototype === obj1.__proto__)

MeuObjt.prototype.nome = 'Anônimo'

MeuObjt.prototype.falar =  function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}

obj3.__proto__ = MeuObjt.prototype

obj3.nome = 'Obj3'
obj3.falar()

// resumindo 

console.log((new MeuObjt).__proto__ == MeuObjt.prototype)
console.log(MeuObjt.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
