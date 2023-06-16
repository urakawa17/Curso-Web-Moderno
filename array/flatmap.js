const escola = [
  {
    turma: "Turma 1",
    alunos: [
      {
        nome: "Ana",
        nota: 8.8,
      },
      {
        nome: "Fabio",
        nota: 7.4,
      },
    ],
  },
  {
    turma: "Turma 2",
    alunos: [
      {
        nome: "Tiago",
        nota: 4.1,
      },
      {
        nome: "Eliana",
        nota: 9.2,
      },
    ],
  },
]

const getNotasAlunos = (aluno) => aluno.nota
const getNotasTurmas = (turma) => turma.alunos.map(getNotasAlunos)
const notas = escola.map(getNotasTurmas)
const notas2 = [].concat([8.8, 7.4], [4.1, 9.2])
console.log(notas)
console.log(notas2)
