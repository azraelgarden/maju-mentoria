//Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das categorias
export function swimmersCategory(age:number):string{
    var category =""
    if(age <= 7){
       category = 'IA'
       return category
   } else if( age >= 8 && age <= 10){
    category = 'IB'
    return category
   } else if(age >= 11 && age <= 13){
    category = 'JA'
    return category
   } else if(age >= 14 && age <= 17 ){
    category = 'JB'
    return category
   } else if( age >= 18){
    category= 'AD'
       return category
   }
   return category
}

swimmersCategory(6)
