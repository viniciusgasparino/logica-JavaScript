const num = 52

if(num % 13 == 0){
    console.log(num + " È dívisivel por 13")
}else{
  console.log("Não é dívisivel por 13")
}

        
/*exercicio2 - Dias do mes*/ 
const dias = 31

const qtmes = Math.floor(dias/30) 
const diasTotal = qtmes * 30
const diasPassados = dias - diasTotal

//diasPassados = dias % 30
console.log(diasPassados)



