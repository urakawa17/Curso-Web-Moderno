function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: "Notebook",
  preco: 4500,
  desc: 0.15,
  getPreco,
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
  nome: "SUV",
  preco: 32500,
  desc: 0.45,
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.apply(global))
console.log(getPreco.apply(produto))

//com parametros
console.log(getPreco.call(carro, 0.3, "GBP"))
console.log(getPreco.apply(carro, [0.2, "USD"]))
