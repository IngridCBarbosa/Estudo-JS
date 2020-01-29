// Usando a notação literal

const obje1 = {}

console.log(obje1)


// Object em JS

console.log(typeof Object, typeof new Object)

const Obj2 = new Object
console.log(Obj2)

// Funções construtoras
function Produto(nome,preco,desc){
    this.nome =  nome // Public
    // preco e desc são privates

    this.getPreci = () =>{
        return preco * ( 1- desc)
    }
}

const p1 =  new Produto('Caneta', 7.90, 0.15)
const p2 =  new Produto('Notebook',2998,0.25)
console.log(p1.getPreci(), p2.getPreci())


// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
       nome,
       salarioBase,
       faltas,
       getSalario(){
           return (salarioBase / 30) * (30 - faltas)
       } 
    }
}

const f1 = criarFuncionario('João', 7980,4)
const f2 = criarFuncionario('Maria', 11400,1)

console.log(f1.getSalario(),f2.getSalario())

//Object.create


const filha = Object.create(null)

filha.nome =' Malu'

console.log(filha)

// Uma função famosa que retorna Objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')

console.log(fromJSON.info)