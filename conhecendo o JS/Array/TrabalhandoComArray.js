const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Adicionar elementos no final da array
// através do push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// adicionar elementos no começo da array
// unshift
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Remover elementos do final do array
// pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// Remover elementos do começo da array
// shift
ultimoElemento = arr.shift("")
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
// includes
// Volta um valor booleano
const inclui = arr.includes("Gandalf")
console.log(inclui)

// Pesquisar pelo indice
// indexOf
// Valta a posição do indice no array
const indice = arr.indexOf("Gandalf")

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// Concatenar
// concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}