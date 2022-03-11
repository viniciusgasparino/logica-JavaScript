function Pessoa(nome,sobrenome,idade){
  let pessoa = {                         
    nome:nome,
    sobrenome:sobrenome,
    idade:idade
  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
                      
  
  return pessoa
}

const pessoa1 = Pessoa("Vinicius","Gasparino",33)
const pessoa2 = Pessoa("joao","Silva",50)              

console.log(pessoa1)
console.log(pessoa2)
console.log("Nomecompleto:" + pessoa1.nomeCompleto)
