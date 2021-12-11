//Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das categorias

function swimmersCategory(age:number){
  if(typeof age != "number"){
      console.log('Por favor, preencha com a idade do nadador.')
      return 'not-number'
  }
    else if(age <= 7){
       console.log("Infantil A")
       return 'IA'
   } else if( age >= 8 && age <= 10){
    console.log("Infantil B")
    return 'IB'
   } else if(age >= 11 && age <= 13){
    console.log("Juvenil A")
    return 'JA'
   } else if(age >= 14 && age <= 17 ){
    console.log("Juvenil B")
    return 'JB'
   } else if( age >= 18){
       console.log("Adulto")
       return 'AD'
   }
}

swimmersCategory(6)