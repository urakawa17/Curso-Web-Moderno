function MeuObjeto() {
  console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = "Anonimo"
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome} `)
}

obj1.falar()

obj2.nome = "Rafael"
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = "Obj3"
obj3.falar()

//Assertivas verdadeiras
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === undefined)
console.log(Object.prototype.__proto__ === null)

// const obj3 = new Object()
// obj3.nome = "Cleo"

// console.log(typeof obj2)
// console.log(obj3.__proto__)
// console.log(obj2.__proto__)
// console.log(MeuObjeto.prototype)
// console.log(Object.prototype)
// console.log(MeuObjeto.__proto__)
// console.log(Object.__proto__)
