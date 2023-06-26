module.exports = function(...nomes) {
  return nomes.map((nome,y) => `Boa semana, ${nome}!, Posição ${y}`)
}