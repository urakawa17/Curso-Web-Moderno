// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.
const resultado = []
let resultado2 = ``
function resultOperacoes(a = 1, b = 1) {
  // resultado.push(`${a}+${b}= ${a + b} `)
  // resultado.push(`${a}-${b}= ${a - b} `)
  // resultado.push(`${a}/${b}= ${a / b} `)
  // resultado.push(`${a}*${b}= ${a * b} `)
  resultado2 = `
  Soma: ${a} + ${b} = ${a + b} 
  Subtração: ${a} - ${b} = ${a - b} 
  Divisão: ${a} / ${b} = ${a / b}
  Multiplicação: ${a} * ${b} = ${a * b}`
  return resultado2
}

console.log(resultOperacoes(2, 5))
