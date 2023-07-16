const fs = require("fs")

function acessaDiretorio(urlArquivo) {
  return __dirname + urlArquivo
}

function leArquivo(x) {
  const a = fs.readFileSync(x, "utf-8")
  return a
}

function splitaArquivo(arquivo) {
  const array = arquivo.split("\r\n")
  return array
}

// const b = leArquivo(a)
// const c = splitaArquivo(b)
// // console.log(c)

function leituraArquivo() {
  return new Promise((resolve, reject) => {
    resolve("/dados.txt")
  })
}

leituraArquivo()
  .then((a) => acessaDiretorio(a))
  .then((b) => leArquivo(b))
  .then((c) => splitaArquivo(c))
  .then(console.log)
