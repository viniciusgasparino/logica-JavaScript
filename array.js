const vetor = ['vinicius', 34, 'Dev', true]

vetor.push(10000,"Ola mundo")

console.log(vetor)

vetor.pop()//remove o ultimo elemento do array

console.log(vetor)


const vetor2 = [10,20,30,40]
let index = 0
while(index < vetor2.length){
    console.log(vetor2[index])
    index++
}

for (let index = 0; index < vetor2.length; index++) {
        console.log(vetor2[index])
}