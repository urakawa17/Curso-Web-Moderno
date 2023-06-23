// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const checaPar = (array) => array % 2 == 0
const checaImpar = (array) => array % 2 != 0

function retornaQtdParImpar() {
  const arrayInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let apenasPares = arrayInteiros.filter(checaPar)
  let apenasImpares = arrayInteiros.filter(checaImpar)
  // console.log(apenasPares)
  // console.log(apenasImpares)
  console.log(`Quantidade de Pares: ${apenasPares.length}. 
  Quantidade de Ímpares: ${apenasImpares.length}`)
}

retornaQtdParImpar()
