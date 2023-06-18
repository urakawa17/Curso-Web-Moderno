// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calculaReajuste(plano, salario) {
  let salarioReajustado = 0.0
  switch (plano) {
    case "A": {
      salarioReajustado = salario * 1.1
      console.log("R$" + salarioReajustado.toFixed(2))
      break
    }
    case "B": {
      salarioReajustado = salario * 1.15
      console.log("R$" + salarioReajustado.toFixed(2))
      break
    }
    case "C": {
      salarioReajustado = salario * 1.2
      console.log("R$" + salarioReajustado.toFixed(2))
      break
    }
    default:
      console.log("Plano Inválido. Opções: (A/B/C)")
  }
}

calculaReajuste("A", 300)
calculaReajuste("B", 1000)
calculaReajuste("C", 1000)
calculaReajuste("D", 1000)
