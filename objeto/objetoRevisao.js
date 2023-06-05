//coleção dinâmica de pares chave/valor
const produto = new Object() //Object no caso é uma função construtora de objetos sendo atribuida à constante produto
produto.nome = "Cadeira"
produto["marca do produto"] = "Generica" //é possível acessar atributos do objeto também dessa forma, utilizando array e string. Não é muito recomendável utilizar dessa forma
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)
delete produto["marca do produto"]
console.log(produto)

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua Teste",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 18,
    },
    {
      nome: "Isabel",
      idade: 34,
    },
    {
      nome: "Lucia",
      idade: 19,
    },
  ],
  calculaValorSeguro: function () {
    return "Seguro OK"
  },
}

console.log(carro.condutores[1].idade)

carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"] = "Avenida Brasil"
console.log(carro)
console.log(carro.calculaValorSeguro())

delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)
