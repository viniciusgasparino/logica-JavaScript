/*
faça uma função que retorne um objeto com a contagem de letras e caracteres da frase

Obs.: Letras maiúsculas e minúsculas são consideradas a mesma letra
*/

function contaLetra(frase) {
	const letras = {}
  frase.toUpperCase().split('').forEach((letra)=>{
    letras[letra] = letras[letra] + 1 || 1
  })
  console.log(letras)
}


contaLetra('O rato roeu a roupa do rei de roma')