/*

Um professor, irritado com o atraso de seus alunos, criou um medidor de presença para saber quem chega atrasado em sua sala de aula.

No medidor, é mostrado com quantos minutos cada aluno chegou para a aula começar.

Dado uma quantidade mínima de alunos M, se a quantidade de alunos no horário for menor que M, o professor cancelará a aula.

Portanto, crie um algorítmo para dizer ao professor se ele deve cancelar ou manter a aula.

Exemplo:
Medidor = [-5, -2, -1, 0, 5]
M = 3
"Aula mantida"

Medidor = [-1, 0, 2, 3, 10]
M = 3
"Aula cancelada"
*/

const medidor = [5, -2, -1, 7, 0]
const minima = 3
let qtdAlunos = 0

const verificarAtraso = () => {
  medidor.forEach((m) => {
      if(m < 0){
        qtdAlunos++
      }
    }
  )
  if(qtdAlunos >= minima){
      return "Aula mantida"
    }else{
     return "Aula cancelada"
    }
}

console.log(verificarAtraso())
console.log(qtdAlunos)

