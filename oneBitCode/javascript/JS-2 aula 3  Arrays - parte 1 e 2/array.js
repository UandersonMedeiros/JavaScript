const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar Elementos
// push - adciona elementos no final
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift - adciona elementos no começo
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Remover Elementos
// pop -  remove elementos no final e devolve o elemento removido
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift - remove elementos no inicio e devolve o elemento removido
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um Elemento
// includes - pesquisar se um elemento existe ou não
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf - descobrir se o elemento esta incluso ou não e sua posição exata
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice - cortar
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat - concatenar (juntar dois arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}