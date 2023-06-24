// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function checaIntervalo() {
  const vetor = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
  let count = 0
  for (let i in vetor) {
    switch (vetor[i] > 10 && vetor[i] < 20) {
      case true:
        count++

        break
    }
  }
  console.log(count)
}
checaIntervalo()
