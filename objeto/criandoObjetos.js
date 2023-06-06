//utilizando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object()
console.log(obj2)

//Utilizando função construtora
function Pessoa(nome, idade) {
  this.nome = nome
  this.getIdade = () => {
    return `A idade do ${this.nome} é ${idade}`
  }
}

const pessoa1 = new Pessoa("Zezinho", 14)
console.log(pessoa1.getIdade())

//Função Factory
function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    getNumeroSorte: () => {
      return `O número da sorte de ${nome} é ${
        Math.floor(Math.random() * 10) + 1
      }`
    },
  }
}

const pes1 = criarPessoa("Docinho", 6)
const pes2 = criarPessoa("Sarinha", 5)

console.log(pes1.getNumeroSorte())
console.log(pes2.getNumeroSorte())

//Object.create

const filha = Object.create(null)
filha.nome = "Ana"

console.log(filha)

//JSON Parse
const fromJSON = JSON.parse('{"nome": "Dudu"}')
console.log(fromJSON.nome)
