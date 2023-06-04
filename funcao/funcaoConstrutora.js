function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0

  //metodo publico
  this.acelerar = () => {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  //metodo publico
  this.getVelocidadeAtual = () => console.log(velocidadeAtual)
}

const uno = new Carro()
uno.acelerar()
uno.getVelocidadeAtual()
/*console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())*/

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.getVelocidadeAtual()
