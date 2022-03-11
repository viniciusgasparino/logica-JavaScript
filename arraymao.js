const pessoas = [
  {nome:"vincius", sobrenome:"Gasparino", idade:33},
  {nome:"joao", sobrenome:"Silva", idade:27},
  {nome:"joaquim", sobrenome:"Souza", idade:57},
  {nome:"Maria", sobrenome:"Oliveira", idade:40},
  {nome:"Francisco", sobrenome:"Santos", idade:20}
]

const n = pessoas.filter(index => {
    return index.sobrenome.charAt(0) === "S" 
})      
console.table(n)
        

const x = pessoas.map(index => {            
    return index.idade/2
})
console.table(x)            

            
const a = pessoas.filter(index => {
    return index === pessoas[0]
})
console.table(a)        












 