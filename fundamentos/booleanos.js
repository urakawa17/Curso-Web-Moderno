let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) //negação
console.log(!!isAtivo) //dupla negação

//os que retornam como verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//os que retornam como falso'
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//para finalizar
console.log(!!("" || null || 0 || " "))

let nome = ""

console.log(nome || "Desconhecido") //retorna o valor da variável 'nome' se for true, ou retorna 'Desconhecido - ele retorna o que vier como true primeiro

nome = "Sara"

console.log(nome || "Desconhecido") //retorna o valor da variável 'nome' se for true, ou retorna 'Desconhecido - ele retorna o que vier como true primeiro
