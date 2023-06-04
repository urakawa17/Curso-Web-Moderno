function criarProduto(
  nomeProd = "Celular",
  precoProd = 30.5,
  desconto = "30%"
) {
  return {
    nome: nomeProd,
    preco: precoProd,
    desconto: desconto,
  }
}

console.log(criarProduto())
console.log(criarProduto("Macbook", 180.99, "15%"))

function criarProduto2(
  nomeProd = "Celular",
  precoProd = 30.5,
  desconto = "30%"
) {
  return {
    nomeProd,
    precoProd,
    desconto,
  }
}

console.log(criarProduto2())
console.log(criarProduto2("Macbook", 180.99, "15%"))
