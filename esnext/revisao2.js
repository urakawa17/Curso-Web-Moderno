//Arrow Function
const soma = (a, b) => a + b //Quando arrow function não possui corpo, return está implicito
console.log(soma(2, 3))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametro Default
function log(texto = "Texto Default") {
  console.log(texto)
}

log("blabla")
log(undefined)
log(null)
log()

//Operador rest
function total(...numeros) {
  let total = 0
  let total2 = 0
  numeros.forEach((n, y) => (total += y)) //n é o valor do elemento que está sendo lido pelo forEach, y é o indice desse elemento
  numeros.forEach((a, b) => (total2 += a))
  return `${total} , ${total2}`
}

console.log(total(1, 2, 3, 4))
