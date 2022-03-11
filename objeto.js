//const num = 10
//const vetor = []
const pessoa = {
  nome: "vinicius",
  idade: 33,
  casado: false,
  notas:[5,8,10],
  endereco:{
    rua: "Jose pedreschi",
    numero: 366,
    bairro: "zxw",
    apartamento:[1,2,3],
  }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.casado)
console.log(pessoa.notas[0])
console.log(pessoa.endereco.rua)
console.log(pessoa.endereco.numero)
console.log(pessoa.endereco.bairro)
console.log(pessoa.endereco.apartamento[1])

const array = [pessoa,pessoa]//passando objeto para dentro do array
console.log(array[0])

const ob = {}
ob.tipo = "esfera"
ob.cor = "azul"
ob.peso = 1.2
ob.rolar = function(x){
    console.log("Rolando " + x + " cm")
}

ob.rolar(12)