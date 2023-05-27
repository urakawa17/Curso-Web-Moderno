const nome = "Sara"
const concatenacao = "Olá " + nome + "!"
const template = `
    Olá
    ${nome} !`

console.log(concatenacao)
console.log(template) //template string, utilizando crase ele considera toda a formatação utilizada na string

//expressões
console.log(`1 + 1 = ${1 + 1}`) //template string inserindo expressão

const up = (texto) => texto.toUpperCase() //função arrow que recebe um parâmetro "texto" e esse valor no parâmetro é convertido para upperCase
console.log(`Ei.. ${up("cuidado")} !`)//no caso, o cuidado foi chamado como parâmetro do método 'up', gerando o retorno CUIDADO;
