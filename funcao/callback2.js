const notas = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10]

//sem callback
const notasBaixas = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

//com callback 1
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2)

//com callback 2
const notasBaixas3 = notas.filter((nota) => nota < 7)
console.log(notasBaixas3)

//com callback 3
const checaNotaMenor7 = (nota) => nota < 7
const notasBaixas4 = notas.filter(checaNotaMenor7)
console.log(notasBaixas4)
