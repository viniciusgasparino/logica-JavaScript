//O exercício abaixo imprime o valor errado, por que e como corrigir?


function greet(person) {
  if (person.name == 'amy') {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}

const result = greet({ name: 'amy' })

console.log(result)



