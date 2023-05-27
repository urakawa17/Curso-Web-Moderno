function retornaErro(e) {
  // throw "Ocorreu um erro em sua requisição. Favor, entrar em contato com a equipe de Suporte de TI"
  throw 10
}

function testaErro(obj) {
  try {
    console.log(obj.name.toUpperCase() + " - " + obj.idade)
  } catch (e) {
    retornaErro(e)
  } finally {
    console.log("**Fim de processamento.**")
  }
}

const obj1 = { nome: "Docinho", idade: 6 }
testaErro(obj1)
