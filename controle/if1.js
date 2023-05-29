function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com nota " + nota)
  }
}

function seVerdade(valor) {
  if (valor) {
    console.log("Verdade.. " + valor)
  }
}

soBoaNoticia(4)
soBoaNoticia(6.9)
soBoaNoticia(7.0)
soBoaNoticia(7.1)

seVerdade()
seVerdade(null)
seVerdade(NaN)
seVerdade(undefined)
seVerdade("")
seVerdade(0)
seVerdade(-1)
seVerdade(1)
seVerdade("Oi")
seVerdade(" ")
seVerdade([])
seVerdade([1, 2])
seVerdade({})
seVerdade({ 1: 1, 2: 2 })
