// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

function verificaStatsJogos(stringJogos) {
  const jogos = stringJogos
  const arrayString = jogos.split(",")
  let arrayJogos = []
  let qtdBested = 0
  let worstScore = 0
  let worstScoreCount = 0
  let lastBest = 0
  let arrayAnalise = []
  arrayJogos = arrayString.map((value) => {
    return +value
  })

  // console.log(
  //   `Antes do FOR: jogos = ${jogos}, arrayJogos = ${arrayJogos}, qtdBested = ${qtdBested}, worstScore = ${worstScore}, lastBest = ${lastBest}`
  // )

  for (let i = 0; i < arrayJogos.length; i++) {
    if (i == 0) {
      lastBest = arrayJogos[i]
      worstScore = arrayJogos[i]
      worstScoreCount = 1

      // console.log(
      //   `No FOR, 1o IF: jogos = ${jogos}, arrayJogos = ${arrayJogos}, qtdBested = ${qtdBested}, worstScore = ${worstScore}, lastBest = ${lastBest}`
      // )
    } else {
      if (arrayJogos[i] > lastBest) {
        lastBest = arrayJogos[i]
        qtdBested++
        // console.log(
        //   `Bateu o record de melhor: qtdBested = ${qtdBested}, worstScore = ${worstScore}, lastBest = ${lastBest}`
        // )
      } else if (arrayJogos[i] < lastBest) {
        if (arrayJogos[i] < worstScore) {
          worstScore = arrayJogos[i]
          worstScoreCount = i + 1
          // console.log(
          //   `Bateu o record de pior: qtdBested = ${qtdBested}, worstScore = ${worstScore}, lastBest = ${lastBest}`
          // )
        }
      }
    }
  }
  arrayAnalise.push(qtdBested)
  arrayAnalise.push(worstScoreCount)
  return console.log(
    // `Resultado Final = ${qtdBested}, worstScore = ${worstScore}, worstScoreCount = ${worstScoreCount} lastBest = ${lastBest}
    `Sequência de Pontuações: ${arrayJogos}
    Array Final [Qtd. Vezes Melhor Pontuação Batida, Jogo Com A Pior Pontuação]: ${arrayAnalise}`
  )
}

verificaStatsJogos("10, 20, 20, 8")
verificaStatsJogos("10, 20, 20, 8, 25, 3, 0, 30, 1")
