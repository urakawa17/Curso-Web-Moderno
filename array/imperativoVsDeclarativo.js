const alunos = [
  { nome: "João", nota: 10 },
  { nome: "Maria", nota: 5 },
]

//Imperativo
//Código imperativo onde o foco é no "como deve ser feito", a maneira como algo será feito.
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo
//Abordagem de código declarativo onde o foco é no "o que deve ser feito". Exemplo de sintaxe de SQL. 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)