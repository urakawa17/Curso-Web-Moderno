const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const chineses = (f) => f.pais === "China"
const mulheres = (f) => f.genero === "F"
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

const brasileiros = (f) => f.pais === "Brazil"
const homens = (f) => f.genero === "M"

axios.get(url).then((response) => {
  const funcionarios = response.data
  console.log(funcionarios)
  console.log("-=-")

  //A mulher chinesa com o menor salario
  const target1 = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
  console.log(target1)

    //O homem brasileiro com o menor salario
  const target2 = funcionarios
    .filter(brasileiros)
    .filter(homens)
    .reduce(menorSalario)
  console.log(target2)
})
