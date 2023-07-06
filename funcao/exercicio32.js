// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function geraMediaArray(array) {
  const somatoriaMedia = array.reduce(calculaMedia, 0)
  const geraMedia = (somatoriaMedia / array.length).toFixed(2)
  console.log(`Resultado Média Aritmética: ${geraMedia}`)
}

function calculaMedia(acum, elem) {
  acum += elem
  return acum
}

geraMediaArray([5, 5, 5])
geraMediaArray([10, 5, 1])
geraMediaArray([6, 8, 4]) 
