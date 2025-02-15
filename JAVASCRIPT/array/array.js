const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
]

console.log(
  "push: Adiciona um elemento no final do array e devolve o novo tamanho do array"
)
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

console.log(
  "unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array"
)
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

console.log(
  "pop: Remove um elemento no final do array e devolve o elemento removido"
)
let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

console.log(
  "shift: Remove um elemento no começo do array e devolve o elemento removido"
)
elementoRemovido = arr.shift("Boromir")
console.log(arr)
console.log(elementoRemovido)

console.log("includes: Verifica se um certo elemento está presente no array")
const inclui = arr.includes("Gandalf")
console.log(inclui)

console.log(
  "indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array"
)
const indice = arr.indexOf("Gandalf")
console.log(indice)

console.log(
  "slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original"
)
const hobbits = arr.slice(0, 4)

console.log(
  "Também pode ser usado com números negativos referenciar o final do array"
)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

console.log(
  "concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)"
)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

console.log(
  "splice: Permite remover elementos em qualquer posição do array e substituir por novos"
)
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

console.log("Usando o for para percorrer cada elemento do array")
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}
