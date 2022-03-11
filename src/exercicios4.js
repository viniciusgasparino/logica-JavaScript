
//Descubra o fatorial de um umero qualquer

let num = 10
let fatorial = 1

while(num >= 1){
    console.log(num + " X ")
    fatorial = fatorial * num
    num--
}

console.log("O fatorial de numero é " + num + " é " + fatorial)



let number = 5
let fatorial2 = 1

for (let i = number; i >= 1; i--) {
    console.log(i + "X")
    fatorial2 = fatorial2 * i
}

console.log("o resultado  total é " + fatorial2)