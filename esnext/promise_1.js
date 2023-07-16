const primeiroElemento = (arrayOuString) => arrayOuString[0]
const letraMinuscula = (letra) => letra.toLowerCase()

let p = new Promise(function (resolve) {
  resolve(["Bia", "Ana", "Marcelo", "Cintia"])
})
  p.then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)
