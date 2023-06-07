const pessoa = {
  nome: "Joao",
  idade: 10,
  peso: 45,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/1999",
})

pessoa.dataNascimento = "30/05/2023"
console.log(pessoa)

//Object assign (ECMAScript 2015)
const dest = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3 }
const objFim = Object.assign(dest, obj1, obj2)
Object.freeze(objFim)
objFim.a = 300
console.log(objFim)
