const objetoJSON = [
  { nome: "teste1", idade: 10 },
  { nome: "teste2", idade: 20 },
  { nome: "teste3", idade: 30 },
]

let map = objetoJSON.map(function (e) {
  return e.nome
})
console.log(map)

const jsonString = JSON.stringify(objetoJSON)
console.log(jsonString)

