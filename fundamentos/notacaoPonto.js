console.log(Math.ceil(6.4))

const obj1 = {}
obj1.nome = "Adidas"
console.log(obj1)
console.log(obj1.nome)
obj1["nome"] = "Puma"
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome
  this.getNome = () => {
    console.log(nome)
  }
  this.getIdade = function () {
    console.log("Idade da Docinho: " + 6)
  }
}

const obj2 = new Obj("Docinho")
obj2.getNome()
obj2.getIdade()
