// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.\

const simples = function (capInicial, taxaJuros, tempoAplic) {
  let montanteAplicacaoSimples = 0
  montanteAplicacaoSimples =
    capInicial * (taxaJuros / 100) * tempoAplic + capInicial
  return console.log(`Montante Aplicação Juros Simples: R$ ${montanteAplicacaoSimples.toFixed(2)}`)
}

simples(1000, 2, 10)
simples(1200, 2, 14)
simples(12250, 5, 24)

const composto = function (capInicial, taxaJuros, tempoAplic) {
  let montanteAplicComp = 0
  montanteAplicComp = capInicial * Math.pow(1 + taxaJuros / 100, tempoAplic)
  return console.log(
    `Montante Aplicação Juros Compostos: R$ ${montanteAplicComp.toFixed(2)}`
  )
}

simples(1000, 2, 10)
composto(620, 1.5, 24)
