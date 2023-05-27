const escola = "Coder"

console.log(escola.charAt(4)) //método que retorna caractere no índice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //método que retorna o unicode referente ao caractere no índice 3
console.log(escola.indexOf("e")) //método que retorna o índice de um caractere, caso encontre na variável
console.log(escola.substring(0, 3)) //método que vai do índice X, Y caracteres - Coder = Cod
console.log("Escola ".concat(escola).concat("!")) //método para concatenar
console.log(escola.replace(/\w/g, "e")) //método que substitui caracteres, no caso está utilizando uma regular expression para substituir todos os caracteres pela letra "e"
console.log(escola.replace("d", "D")) //método que substitui caracteres, no caso está substituindo os caracteres 'd' por 'D'
console.log("Ana, Maria, Pedro".split(","))//método que separa uma cadeira de caracteres em um array, no caso está utilizando o "," como separador, gerando 3 valores no array
