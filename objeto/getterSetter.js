const obj1 = {
  _valor: 1, //o uso do underline indica como convenção um atributo privado
  get valor() {
    return this._valor++
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  },
}

console.log(obj1)
console.log(obj1.valor)
console.log(obj1.valor)
console.log(obj1.valor)
obj1.valor = 2
console.log(obj1.valor)
obj1.valor = 2
console.log(obj1.valor)
