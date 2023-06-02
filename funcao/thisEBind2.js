function Pessoa() {
  this.idade = 0

  //o codigo desse jeito nao consegue entender o this
  /*setInterval(function () {
    this.idade++
    console.log(this.idade)
  }, 1000)*/

  //metodo 1, colocando bind
  /*setInterval(function () {
    this.idade++
    console.log(this.idade)
  }.bind(this), 1000)
}*/

  //metodo 2, settando uma const self recebendo this
  const self = this
  setInterval(function () {
    self.idade++
    console.log(self.idade)
  }, 1000)
}

new Pessoa()