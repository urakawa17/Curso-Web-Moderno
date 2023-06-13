const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() //apaga ultimo elemento
console.log(pilotos)

pilotos.push("Verstappen") //adiciona elemento na ultima posição
console.log(pilotos)

pilotos.shift()
console.log(pilotos) //remove primeiro elemento

pilotos.unshift("Hamilton") //adiciona elemento na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array gerado a partir do indice param
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //a partir do indice x (x inclusivo), percorrer até o indice y e gerar novo array com os elementos capturados (y exclusivo)
console.log(algunsPilotos2)
