for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log("i fora do loop = ", i)

//agora com let

for (let j = 0; j < 10; j++) {
  console.log(j)
}

console.log("j fora do loop = ", j) //nao consigo encontrar pois o let tem escopo de bloco e, portanto, como foi declarado dentro do for, não pode ser acessado fora dele sem declará-lo
