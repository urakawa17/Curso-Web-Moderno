const fabricantes = ["Volvo", "Honda", "Nissan"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante) => console.log(fabricante))
fabricantes.forEach((fabricante, a) => console.log(fabricante, a))
fabricantes.forEach((fabricante, a, c) => console.log(fabricante, a, c))
fabricantes.forEach((fabricante, a, c, d) => console.log(fabricante, a, c, d))
fabricantes.forEach((fabricante, a, c, d, e) =>
  console.log(fabricante, a, c, d, e)
)
