// 12) Faça um algoritmo que calcule o fatorial de um número

const retornaFatorial = (num) => {
  let aux = num
  let count = num
  while (count > 1) {
    count--
    aux *= count
  }
  return console.log(aux)
}

retornaFatorial(3)
retornaFatorial(4)
retornaFatorial(5)
retornaFatorial(6)
