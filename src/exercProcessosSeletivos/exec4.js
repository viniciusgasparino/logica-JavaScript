// Verifique se a palavra é palindromo, isso é, pode ser escrita de trás pra frente da mesma forma que de frente para trás




function palindrono(palavra) {
	const nova = palavra.split('').reverse().join('')
  console.log(nova)
  if(palavra === nova){
    console.log(`${palavra} é palindrono`)
  }else{
    console.log(`${palavra} não é palindrono`)
  }
  
}

palindrono("ana")

