const vetor = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

for (let i in vetor) {
  switch (vetor[i] > 10) {
    case true:
      console.log("Passou10")
      break
  }
}
