
let multa = 0
let excesso = 0
const limite = 50
const valor = 4                       

let pesoPeixe = 60//informando o peso do peixe pescado
                                    
if(pesoPeixe > limite){
    excesso = pesoPeixe - limite
    multa = valor * excesso 
    console.log("Peso total do peixe " + pesoPeixe)
    console.log("voce passou " + excesso + "Kg" + " a mais do permitido")
    console.log("A sua multa sera de " + multa + "R$")
}else{
  console.log("Peso total do peixe " + pesoPeixe)
  console.log(excesso + " Voce não passou do peso limite")
}