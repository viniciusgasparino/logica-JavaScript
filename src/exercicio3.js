const list = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]
let obrigatorios = 0            
let facultativos = 0              
let naoEleitor = 0
let nomeEleitor = []      
            
for (const arr of list) {   
      if(arr >= 18 && arr <= 69){
        obrigatorios++                  
      }
      if(arr >= 16 && arr <= 17 || arr > 69 ){
        facultativos++
      }
      if(arr < 16){
        naoEleitor++      
        nomeEleitor.push(arr)
      }
}

console.log(obrigatorios)
console.log(facultativos)
console.log(naoEleitor)

for (const i of nomeEleitor) {
  console.log(i)
}

