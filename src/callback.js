function upload(){
  return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("02 - UPLOAD CONCLUIDO")
        resolve()
      },2000)
  })
}


async function uploadDeFoto(){
    console.log("01 - Iniciando o udpload")
    await upload()
    console.log("03 - EXECUÇÂO FINALIZADA")
}

uploadDeFoto()      