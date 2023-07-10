function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(segundos)
      if (segundos !== 5) {
        resolve(frase)
      } else {
        reject(frase)
      }
    }, segundos * 1000)
  })
}

falarDepoisDe(5, "Que legal!")
  .then((frase) => frase.concat("***"))
  .then((xxx) => xxx.concat("xxx"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log("Exemplo catch, executa o reject"))

falarDepoisDe(2, "Que legal!")
  .then((frase) => frase.concat("***"))
  .then((xxx) => xxx.concat("xxx"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log("Exemplo catch, executa o reject"))
