const pessoa = {
  nome: "vincius",
  sobrenome: "Gasparino",
  idade: 31,
  senha: "123"
}

/*const nome = pessoa.nome
const sobrenome = pessoa.sobrenome
console.log(nome)
console.log(sobrenome)*/

const {nome, idade} = pessoa
//pessoa.nome,pessoa.idade        
console.log(nome)
console.log(idade)                                  
                                            
const vetor = [1,2,3,4]         
const [a, b] = vetor

const newVetor = [0,...vetor, 5, 6]//criando um novo array com outros elementos
console.log(newVetor)                      
console.log(vetor)



const pessoaAtualizado = {
  ...pessoa,
  idade:32,
  senha: "456"        
}
console.log(pessoaAtualizado)