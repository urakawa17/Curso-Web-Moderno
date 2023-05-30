//diferenças entre while e for loops
//while
let contador = 1
while (contador <= 10) {
  console.log(`Valor de contador = ${contador}`)
  contador++
}
console.log("-=-")
//for
for (let i = 1; i <= 10; i++) {
  console.log(`Valor de i = ${i}`)
}

//for com array
const notas = [3.5, 7, 10, 9, 8.5, 5.5]
for (let i = 0; i < notas.length; i++) {
  console.log(`Nota ${i + 1} = ${notas[i]}`)
}
