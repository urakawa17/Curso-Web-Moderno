const getInteiroAleatorioEntre = (min, max) => {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log("Inteiro sorteado: " + opcao)
}

console.log("-1 detectado, fim de processamento.")