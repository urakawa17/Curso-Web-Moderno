//São todos funções
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
  return this.split("").reverse().join("")
}

console.log("Escola Cod3r".reverse())

Array.prototype.first = function() {
  return this[0]
}
const testeArray = [1, 3, 5, 6, 7]
console.log(testeArray.first())
console.log([1, 3, 5, 6, 7].first())
