const imprimirResultado = (nota) => {
  if(nota >= 7){
    console.log("Aprovado!")
  } else {
    console.log("Reprovado!")
  }
}

imprimirResultado(1)
imprimirResultado(6.9)
imprimirResultado(7.1)
imprimirResultado("Epa")