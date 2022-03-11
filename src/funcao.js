function ola(){
  console.log("olamundo")
  console.log("olamundo")
  console.log("olamundo")
}

function soma(a,b){
  return a + b
}

function subtracao(a,b){
  return a - b
}

function calculadora(tipo){
  const a = 2
  const b = 1
  if(tipo === "soma"){
    return soma(a,b)
  }else if(tipo==="subtracao"){
    return subtracao(a,b)
  }
}

console.log(calculadora("subtracao"))

numberPar(223)

function numberPar(n){
  if(n % 2 == 0){
    console.log("O numero é par")
  }else if(n % 2 == 1){
    console.log("o numero é impar")
  }
}

function par(n){
  return n % 2 === 0
}

function impar(n){
  return n % 2 === 1
}

const epar = par(8)
console.log(epar)


for (let index = 0; index <= 100; index++) {
    if(par(index)){
       console.log(index)
    }
}
/*
for (let i = 0; i <= 100; i++) {
    if(impar(i)){
      console.log(i)
    }
}*/








