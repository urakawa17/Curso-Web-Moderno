//Convertendo para funcao construtora
// class Pessoa {
//   constructor(nome = "Teste") {
//     this.nome = nome
//   }

//   falar() {
//     console.log(`Meu nome é ${this.nome}`)
//   }
// }

// const p1 = new Pessoa("Docinho")
// p1.falar()

function Pessoa(nome) {
  this.nome = nome
  
  this.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa("Docinho")
p1.falar()
