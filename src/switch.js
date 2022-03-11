const nomeDoMes = "fevereiro"
const num = 2
const mes = ['janeiro','fevereiro','março','abril','maio','junho']

for (const pos in mes) {
    if(mes[pos] === nomeDoMes){
      console.log(mes[pos])
    }
}


switch (num) {
  case 1:
      console.log(mes[0])
    break;
  case 2:
      console.log(mes[1])
    break;
  case 3:
    console.log(mes[2])
    break; 
  case 4:
    console.log(mes[3])
    break; 
  case 5:
    console.log(mes[4])
    break;
    case 5:
      console.log(mes[5])
      break;      
  default:
      console.log("Não exite mes com esse numero")
}