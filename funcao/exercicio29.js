// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

let numVetor
let vetor = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
let countInterval

function checaIntervalo(a, b, numVetor){
  let minInt = a
  let maxInt = b
  console.log("passou22")
  switch (numVetor) {
    // case numVetor >= minInt && numVetor <= maxInt:
    //   countInterval++
    //   console.log("passou")
    //   break
    case 10:
      console.log("passou33")
      break
  }
}

for (let i in vetor) {
  checaIntervalo(10, 20, vetor[i])
}
console.log(countInterval)
