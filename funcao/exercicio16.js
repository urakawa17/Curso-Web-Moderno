// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadora(n1, operator, n2) {
  let resultado
  switch (operator) {
    case "+":
      resultado = n1 + n2
      console.log(`${n1} + ${n2} = ${resultado}`)
      break

    case "-":
      resultado = n1 - n2
      console.log(`${n1} - ${n2} = ${resultado}`)
      break

    case "*":
      resultado = n1 * n2
      console.log(`${n1} * ${n2} = ${resultado}`)
      break

    case "/":
      resultado = n1 / n2
      console.log(`${n1} / ${n2} = ${resultado}`)
      break

    default:
      console.log(
        `Operação inválida. Por gentileza, utilize os operadores +, -, * ou /`
      )
      break
  }
}

calculadora(1, "+", 4)
calculadora(3, "*", 9)
calculadora(10, "/", 4)
