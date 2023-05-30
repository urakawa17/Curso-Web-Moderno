//Função em JS é First-Class Object (Citizen)
//Higher-order function

//criando de forma literal
function fun1() {}

//armazenando em uma variável
const fun2 = function () {}

//armazenando em um array
const array = [
  function (a, b) {
    return a + b
  },
  fun1,
  fun2,
]
console.log(array[0](1, 2))

//armazenando em um atributo de objeto
const obj = {}
obj.falar = function () {
  return "Opa"
}
console.log(obj.falar())

//passar função como parametro
function run(fun) {
  fun()
}

run(function () {
  console.log("Executando..")
})

//uma função pode retornar/conter outra função
function soma(a, b) {
  return function (c) {
    console.log("Resultado das somas: " + (a + b + c))
  }
}

soma(5, 5)(5)

//outra forma
const valAux = soma(10, 20)
valAux(1)
