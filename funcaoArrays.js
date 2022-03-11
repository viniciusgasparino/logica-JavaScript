const vetor = [1,5,4,3,10,7,8,20,12]

//passa por todos os elementos do array
vetor.forEach((element,pos) => {
    console.log(`${pos} - ${element}`)
})

//find - retorna o elemento
const retorno = vetor.find((element) => {
    if(element === 10){     
      return true
    }else{
      return false
    }
})

//findIndex retorna a posição do elemento
const index = vetor.findIndex((element) => {
    if(element === 10){
      return true
    }else{
      return false
    }
})


//retorna true se pelo menos um numero satisfazer a condição
const valor = vetor.some((element) => {
    if(element > 19){
      return true
    }else{
      return false              
    }       
})
console.log(valor) 



//retorna true se todos os numeros respeitarem a condição
const every = vetor.every((element) => {        
  if(element >= 1){          
    return true
  }else{
    return false
  }
})
console.log(every)        




