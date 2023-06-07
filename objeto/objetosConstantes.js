const pessoa1 = { nome: "João" }
console.log(pessoa1)

// pessoa1 = { nome: "Maria" } - Isso gera erro, estou tentando atribuir um valor novo ao objeto pessoa1

pessoa1.nome = "Aline" //Isso já é possível pois estou alterando um atributo do objeto pessoa1
console.log(pessoa1)

Object.freeze(pessoa1) //A partir desse momento, nada pode ser alterado do objeto/constante pessoa1
pessoa1.nome = "Téo"
console.log(pessoa1)

const pessoa2 = Object.freeze({ nome: "Celia" }) //Da mesma forma que posso criar uma constante e atribuir um objeto no mesmo instante em que congelo o objeto
pessoa2.nome = "Juquinha"
console.log(pessoa2)
