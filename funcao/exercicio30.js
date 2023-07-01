// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function checaMenorMaior(arrayInteiros) {
  let array = arrayInteiros

  console.log("Array: " + arrayInteiros)

  const checaMenor = array.reduce((menor, atual) => {
    if (atual < menor) {
      menor = atual
    }
    return menor
  })
  console.log("Menor valor: " + checaMenor)

  const checaMaior = array.reduce((maior, atual) => {
    if (atual > maior) {
      maior = atual
    }
    return maior
  })
  console.log("Maior valor: " + checaMaior)
}

checaMenorMaior([1, 2, 3, 4])
checaMenorMaior([7, 6, 5, 3])
checaMenorMaior([13, 8, 9, 4])
// checaMenorMaior([1, 2, 3, 4])
// checaMenorMaior([1, 2, 3, 4])
