Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de Honra")
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado")
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação")
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado")
  } else {
    console.log("Nota inválida, digitar uma nota entre 0 a 10")
  }
}

imprimirResultado(11)
imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7.99)
imprimirResultado(6.99)
imprimirResultado(5.99)
imprimirResultado(4.99)
imprimirResultado(3.99)
imprimirResultado(-1)
