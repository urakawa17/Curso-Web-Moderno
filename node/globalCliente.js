require("./global")

console.log(MinhaApp.nome)
MinhaApp.nome = "José" //não vai alterar devido ao Object.freeze()
console.log(MinhaApp.nome)
