// cadeia de protótipos (portotype chain)

const avo = {
    attr1:'A'
}
const pai = {
    __proto__: avo, 
    attr2:'B'
}
const filho = {
    __proto__: pai,
    attr3:3
}

console.log(filho.attr1)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual +  delta <= this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h` 
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //SHADOWIND

}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro) // nesse momento estabeleceu uma relação
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)

console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())