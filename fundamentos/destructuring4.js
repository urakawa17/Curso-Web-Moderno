function randArray([min = 0, max = 100]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(randArray([10, 4]))
console.log(randArray([10, 4]))
console.log(randArray([10]))
console.log(randArray([, 4]))
console.log(randArray([]))
