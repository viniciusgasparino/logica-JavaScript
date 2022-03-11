const person = {
  name: "jose",
  lastname:"fortes",          
  age:"20"
}

//object.keys():Cria um array com todas as chaves do objeto
console.table(Object.keys(person))


//object.values():Cria um array com todas as valores do objeto
console.table(Object.values(person))      


//object.entries():Cria um array com um array de objetos e valores
const vetor = Object.entries(person)
/*
[['name','José'],['lastname','fortes'],['age',20]]
*/

const livros = {
  'livro A': 19.90,
  'livro B': 97.00,
  'livro c': 20.00 
}

const valores = Object.values(livros).reduce((acumulator,index) => {
      return acumulator + index
},0)      
console.log(valores)          



