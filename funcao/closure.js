//Closure é o escopo criado quando uma função é declarada/definida
//O escopo permite com que a função acesse variáveis externas à função

const x = "Global"

function fora() {
  const x = "Local"
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
