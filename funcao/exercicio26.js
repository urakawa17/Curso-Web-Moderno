// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function retornaPares() {
  let parImpar
  for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
      parImpar = "Par"
    } else {
      parImpar = "Ímpar"
    }
    console.log("Número: " + i + " - " + parImpar)
    parImpar = ""
  }
}

retornaPares()
