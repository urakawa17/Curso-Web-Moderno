const notas = [3.5, 7, 10, 9, 8.5, 5.5]

for (let i in notas){
  console.log(i, notas[i])
}

const bichos = {
  nome: "Docinho",
  idade: 6,
  cor: "Branca"
}

for (let atributo in bichos){
  console.log(`${atributo} = ${bichos[atributo]}`)
}
