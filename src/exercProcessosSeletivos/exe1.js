// Principal: Liste o nome dos passageiros
// Bonus (a)- Liste o nome dos vegetarianos/veganos
// Bonus (b)- Organize os passageiros por ordem de conexões


const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
]

function getPassengers(list){
  let names = []
  passengers.forEach((list)=>{
    names.push(list.passengerName)
  })
  return names
}

function listaNomes(list){
  return list.map((obj)=>
    obj.passengerName
  )
}

const filterVegan = (list) => list.filter(({isVegetarianOrVegan}) =>
   isVegetarianOrVegan 
)

const filterVegan2 = (obj) => {
 return obj.isVegetarianOrVegan
}

const names = listaNomes(passengers)
console.log(names)

/*const vegans = listaNomes(filterVegan(passengers))
console.log(vegans)*/

const veganos = listaNomes(passengers.filter(filterVegan2))
console.log(veganos)


const listaOrdenada = passengers.sort((pas1,pas2)=>{
  return pas1.connectedFlights - pas2.connectedFlights
})

const nomesOrdenados = listaNomes(listaOrdenada)
console.log(nomesOrdenados)



