let num  = [5, 6, 7, 8, 9]
num.push(1) //adicionando mais um valor aos elementos 
num.sort() //organiza os elementos em ordem crescente 
console.log (num) // ele dar o resultado da variavél "num".
console.log(`nosso vetor tem ${num.length} elementos.`)
console.log (`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log ('o valor não foi encontrado.')
} else {
    console.log(`o valor 8 esta na posição ${pos}`)
}
