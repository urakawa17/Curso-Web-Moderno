function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

function rand2(min2 = 0, max2 = 1000) {
  const valor2 = Math.random() * (max2 - min2) + min2
  return Math.floor(valor2)
}

const obj = { min: 10, max: 100 }
const a = 10
const b = 100
console.log(rand(obj))
console.log(rand2(a, b))
