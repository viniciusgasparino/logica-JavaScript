/*function fatorial(n){
    if(n <= 1){
      return n
    }
    return n * fatorial(n - 1)
}

const numbers = 5
const resposta = fatorial(numbers)
console.log(resposta)




contador(0,20)

function contador(min,max){
  console.log(min)
    if(min < max){
        contador(++min,max)
    }
}
*/
                      
  let num = 0
  let num2 = 1
  let num3
  let c = 0

  while(c <= 3){
    num3 = num + num2
    console.log(num3)
    num = num2
    num2 = num3
    c++
  }


  function fibonacci(n){
    if(n === 1){
      return 1
    }else if(n === 2){
      return 2
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
  
  console.log(fibonacci(9))
  
