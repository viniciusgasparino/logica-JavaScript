//for in
/*let vetor = [10,20,30,40]

for (var pos in vetor) {
      console.log(vetor[pos])
}

//for of,serve para mostrar os elementos dentro do array, diretamente
for (var arr of vetor) {
    console.log(arr)
}*/

let num = [20,55,44,88]
let media = 0
let soma = 0

for (const key in num) {
    soma = soma + num[key]
}

/*for (let index = 0; index < num.length; index++) {
      soma = soma + num[index]
}*/

media = soma/num.length
console.log(media)

