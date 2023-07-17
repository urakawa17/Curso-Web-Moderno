function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      // con.log('forçando erro')
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!")
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e)
    }
  })
}

funcionarOuNao("Testando..", 0.8)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => console.log(v)
    // (v) => console.log(v),
    // (err) => console.log(`Erro Específico: ${err}`)
  )
  .then(() => console.log("Quase fim!"))
  .catch((err) => console.log(`Erro Geral: ${err}`))
  .then(() => console.log("Fim!"))
