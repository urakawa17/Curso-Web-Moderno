//Cadeira de prototipos (prototype chain)
Object.prototype.attr0 = "A"
const avo = { attr1: 1 }
const pai = { __proto__: avo, attr2: 2 }
const filho = { __proto__: pai, attr3: 3 }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3, filho.attr4)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  },
}

const ferrari = {
  modelo: "F40",
  velMax: 324,
}

const volvo = {
  modelo: "V30",
  status() {
    return `${this.modelo}: ${super.status()}`
  },
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(50)
ferrari.acelerarMais(50)

console.log(volvo.status())
console.log(ferrari.status())

volvo.acelerarMais(50)
ferrari.acelerarMais(50)

console.log(volvo.status())
console.log(ferrari.status())

volvo.acelerarMais(150)
ferrari.acelerarMais(150)

console.log(volvo.status())
console.log(ferrari.status())
