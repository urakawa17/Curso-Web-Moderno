// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false

const verificaDivisivel3 = (num) => {
  if (num % 3 == 0) {
    return true
  } else return false
}

console.log(verificaDivisivel3(3))
console.log(verificaDivisivel3(4))
console.log(verificaDivisivel3(5))
console.log(verificaDivisivel3(6))
