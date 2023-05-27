const pessoa = {
  nome: "Sara",
  idade: 28,
  endereco: {
    pais: "Paraguai",
    cidade: "Assunção",
  },
}

console.log(pessoa.endereco)

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const {
  endereco: e,
  endereco: { pais: p, cidade: c },
} = pessoa
console.log(e, p, c)
