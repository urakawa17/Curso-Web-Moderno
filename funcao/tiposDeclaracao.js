//function declaration - pode ser chamada em qualquer local do codigo
function soma(x,y) {
  return x + y
}

//function expression - só pode ser chamada em ordem, instanciando esta funcao apenas após seu termino no código, após sua declaracao
const result = function (x,y) {
  return x - y
}

//named function expression - só pode ser chamada em ordem, instanciando esta funcao apenas após seu termino no código, após sua declaracao
const result2 = function result2(x,y){
  return x * y
}