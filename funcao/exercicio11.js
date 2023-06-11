// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

const verificaAnoBissexto = (ano) => {
  let por100 = ano % 100 == 0 ? true : false
  let por400 = ano % 400 == 0 ? true : false
  let por4 = ano % 4 == 0 ? true : false

  if (por400 == true) {
    console.log(`${ano} é ano bissexto`)
  } else if (por100 == true) {
    console.log(`${ano} não é ano bissexto`)
  } else if (por4 == true) {
    console.log(`${ano} é ano bissexto`)
  }
  // console.log(por100, por400, por4)
}

verificaAnoBissexto(300)
verificaAnoBissexto(400)
verificaAnoBissexto(4)
verificaAnoBissexto(5)
verificaAnoBissexto(8)
verificaAnoBissexto(10)
verificaAnoBissexto(100)
verificaAnoBissexto(101)
verificaAnoBissexto(800)
