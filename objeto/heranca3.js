const pai = { nome: "Pedro", corCabelo: "Preto" }

const filha1 = Object.create(pai)
filha1.nome = "Bia"
console.log(filha1)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome: {
    value: "Dani",
    enumerable: true,
    writable: false,
  },
})

console.log(filha2.nome)
filha2.nome = "Diego"
console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo na cor ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let i in filha2) {
  filha2.hasOwnProperty(i) ? console.log(i) : console.log(`Por herança: ${i}`)
}
