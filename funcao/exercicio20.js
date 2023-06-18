// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function trocaCedulas(valor) {
  let jaPassou =
    (auxModNovo =
    auxMod =
    restoTroca =
    qtd100 =
    qtd50 =
    qtd10 =
    qtd5 =
    qtd1 =
    aux =
      0)

  if (valor > 100) {
    inteiroDivisao = Math.floor(valor / 100)
    auxMod = valor % 100
    qtd100 = inteiroDivisao
    jaPassou = 1
  }

  if (jaPassou != 0) {
    if (valor > 50) {
      inteiroDivisao = Math.floor(auxMod / 50)
      auxMod = auxMod % 50
      qtd50 = inteiroDivisao
      jaPassou = 1
    }
  } else {
    if (valor > 50) {
      inteiroDivisao = Math.floor(valor / 50)
      auxMod = valor % 50
      qtd50 = inteiroDivisao
      jaPassou = 1
    }
  }

  if (jaPassou != 0) {
    if (valor > 10) {
      inteiroDivisao = Math.floor(auxMod / 10)
      auxMod = auxMod % 10
      qtd10 = inteiroDivisao
      jaPassou = 1
    }
  } else {
    if (valor > 10) {
      inteiroDivisao = Math.floor(valor / 10)
      auxMod = valor % 10
      qtd10 = inteiroDivisao
      jaPassou = 1
    }
  }

  if (jaPassou != 0) {
    if (valor > 5) {
      inteiroDivisao = Math.floor(auxMod / 5)
      auxMod = auxMod % 5
      qtd5 = inteiroDivisao
      jaPassou = 1
    }
  } else {
    if (valor > 5) {
      inteiroDivisao = Math.floor(valor / 5)
      auxMod = valor % 5
      qtd5 = inteiroDivisao
      jaPassou = 1
    }
  }

  if (jaPassou != 0) {
    if (valor > 1) {
      qtd1 = Math.floor(auxMod / 1)
      jaPassou = 1
    }
  } else {
    if (valor > 1) {
      qtd1 = Math.floor(valor / 1)
      jaPassou = 1
    }
  }

  console.log(`
  Valor: ${valor}
  Notas de R$100: ${qtd100}
  Notas de R$50: ${qtd50}
  Notas de R$10: ${qtd10}
  Notas de R$5: ${qtd5}
  Notas de R$1: ${qtd1}
  `)
}

trocaCedulas(18)
trocaCedulas(22)
trocaCedulas(37)
trocaCedulas(54)
