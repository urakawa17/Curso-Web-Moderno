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
