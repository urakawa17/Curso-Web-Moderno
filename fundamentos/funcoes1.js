function imprimeSoma(a, b) {
  console.log(a + b)
}

imprimeSoma(1, 2)
imprimeSoma(1, 2, 3, 4, 5, 6)
imprimeSoma(1)
imprimeSoma()
imprimeSoma("teste", " outro teste")

//Função com retorno
function soma(a, b = 2) {
  return a + b
}

soma(1) //não retorna nada no console
console.log(soma(1))
console.log(soma(1, 1))
console.log(soma())
