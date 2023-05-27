const array = []

for (var i = 0; i < 10; i++) {
  array.push(function () {
    console.log(i)
  })
}

array[2]()

const array2 = []

for (let j = 0; j < 10; j++) {
  array2.push(function () {
    console.log(j)
  })
}

array2[2]()
array2[5]()
