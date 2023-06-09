//Maneiras de filtrar arrays
const produtos = [
  { nome: "PC", preco: 7499, fragil: true },
  { nome: "Celular", preco: 2499, fragil: true },
  { nome: "Tablet", preco: 1599, fragil: true },
  { nome: "Controle", preco: 249, fragil: false },
]

console.log(
  produtos.filter(function (p) {
    return true
  })
)

const caro = (produto) => produto.preco >= 200
const barato = (produto) => (produto.preco = 249)
const fragil = (produto) => produto.fragil

console.log(produtos.filter(caro).filter(fragil).filter(barato))
console.log(produtos.filter(caro).filter(fragil))
