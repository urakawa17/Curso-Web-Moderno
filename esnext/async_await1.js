function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo)
  })
}

// esperarPor(2000)
//   .then(() => console.log("Teste1"))
//   .then(() => esperarPor(3000))
//   .then(() => console.log("Teste2"))
//   .then(() => esperarPor(1000))
//   .then(() => console.log("Teste3"))

function retornaValor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Etapa 1 Finalizada..')
      resolve(10)
    }, 5000)
  })
}

async function executar() {
  let valor = await retornaValor()

  await esperarPor(1000)
  console.log(`O valor + 1 é ${valor + 1}`)

  await esperarPor(1000)
  console.log(`O valor + 2 é ${valor + 2}`)

  await esperarPor(1000)
  console.log(`O valor + 3 é ${valor + 3}`)

  return `O valor final é ${valor + 3}`
}
// executar().then(console.log)
// ou

async function executarDeVerdade(){
  const v = await executar()
  console.log(v)
}

executarDeVerdade()


