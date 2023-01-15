const limite = 50
const valorMulta = 4
const pesoPeixes = 60

let excesso = pesoPeixes > limite ? pesoPeixes - limite : 0
let multa = excesso * valorMulta

console.log("Excesso: " + excesso)
console.log("Multa: R$" + multa);
