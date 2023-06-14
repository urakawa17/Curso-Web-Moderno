const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45}',
  '{ "nome": "Caderno", "preco": 13.90}',
  '{ "nome": "Kit de Lapis", "preco": 41.22}',
  '{ "nome": "Caneta", "preco": 7.50}',
]

//Retornar um array apenas com os preços
let resultado = carrinho.map(function (e) {
  let aux = JSON.parse(e)
  preco = aux.preco.toFixed(2).replace(".", ",")
  return preco
})

console.log(resultado)

//segundo metodo
const paraObjeto = (json) => JSON.parse(json)
const apenasPreco = (produto) => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)
