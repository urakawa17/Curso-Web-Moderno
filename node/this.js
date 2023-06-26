console.log(this === global) //fora de função tradicional, this aponta para module.exports
console.log(this === module)
console.log(this === module.exports)

console.log(this === exports)

function thisJS() {
  console.log(this === exports)
  console.log(this === global) //dentro de função tradicional, this aponta para global

  this.perigo = '...' //aponta para escopo global 
}
thisJS()
this.perigo2 = '...' //aponta para exports, publico
