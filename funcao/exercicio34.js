// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function checaStrings(str1, str2) {
  //Popula strings em Arrays
  const string1 = str1
  const array1 = string1.toLowerCase().split("")
  console.log("Array 1: " + array1)

  const string2 = str2
  const array2 = string2.toLowerCase().split("")
  console.log("Array 2: " + array2)

  //Popula Acumulador 1 ao verificar Array 1
  function populaAcum1(acum, atual) {
    for (let i in array2) {
      // console.log(`Atual: ${atual}`)
      // console.log(`Array na ${i}: ${array2[i]}`)
      if (atual == array2[i]) {
        // console.log("Passou")
        acum++
      }
    }
    return acum
  }

  //Popula Acumulador 2 ao verificar Array 2
  function populaAcum2(acum, atual) {
    for (let i in array1) {
      // console.log(`Atual: ${atual}`)
      // console.log(`Array na ${i}: ${array1[i]}`)
      if (atual == array1[i]) {
        // console.log("Passou")
        acum++
      }
    }
    return acum
  }

  //Valida se todas as letras do Array 1 existem no Array 2
  const checaPrimeira = array1.reduce(populaAcum1, 0)
  if (checaPrimeira == array1.length) {
    console.log("Todas as letras do Array 1 constam no Array 2!!")
  } else console.log("Existem letras do Array 1 que não constam no Array 2..")

  //Valida se todas as letras do Array 2 existem no Array 1
  const checaSegunda = array2.reduce(populaAcum2, 0)
  if (checaSegunda == array2.length) {
    console.log("Todas as letras do Array 2 constam no Array 1!!")
  } else console.log("Existem letras do Array 2 que não constam no Array 1..")
}

checaStrings("ab", "abc")
checaStrings("ab", "abcd")
checaStrings("abdC", "aPdo")
checaStrings("aovo", "ovoa")
