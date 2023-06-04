//Utilizando classe
class Pessoa {
  constructor(nome = "Teste") {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa("Docinho")
p1.falar()

//Utilizando função construtor
const criarPessoa = (nome = "Sarinha") => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  }
}

const p2 = criarPessoa("Bebe")
p2.falar()
