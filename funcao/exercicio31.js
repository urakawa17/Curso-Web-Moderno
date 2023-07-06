// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function checaNegativos(arrayInteiros) {
  const acumulador = arrayInteiros.reduce((acum, atual) => {
    if (atual < 0) {
      // console.log("caiu")
      acum++
    }
    return acum
  }, 0)

  console.log(`Total de números inteiros negativos: ${acumulador}`)
}

checaNegativos([1, 2, 3, -4, -3])
