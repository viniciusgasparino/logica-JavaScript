const array2 = [1,2,3,4,5]

//splice: corta o array,  o primeiro parametro é o inicio e o segundo é a quantidade
//console.log(array2.splice(1, 3))


//map(): alterar os valores dentro do array seguindo uma regra
const newArray = array2.map((element) => {
    return 0
})
console.log(newArray)


const newArray2 = array2.map((element) => {
    return element * 2        
})                        
console.log(newArray2)
            

//filter: filtrar os elementos dentro do array
const filtro = array2.filter((element) => {
    return element % 2 === 1
})                          
console.log(filtro)


//reduce: reduz o array para alguma outro elemento
const reducce = array2.reduce((acumulator,element) => {
    return acumulator - element     
},100)
console.log(reducce)              

            
