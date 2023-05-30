function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Valor acima do permitido - Area:  ${area}m2`)
  } else {
    console.log("tchau")
  }
}

area(5, 5)
console.log(area(5, 5))
