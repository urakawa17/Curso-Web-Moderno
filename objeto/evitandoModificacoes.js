//Object.preventExtensions
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "Promoção",
})

console.log(Object.isExtensible(produto))
produto.nome = "Papel A4"
produto.identificador = "#1234"
delete produto.tag //é possível deletar
console.log(produto)

//Object.seal
const pessoa = {
  nome: "Sara",
  idade: 28,
}

Object.seal(pessoa)
pessoa.idade = 30
pessoa.hobby = "Yoga"
delete pessoa.idade //não é possível acrescentar nem deletar atributos/elementos do objeto com o seal

console.log(pessoa)

//Object.freeze => objeto com seal + valores constantes, nada muda
