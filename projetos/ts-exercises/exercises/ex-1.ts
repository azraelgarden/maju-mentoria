//Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: 
//"São múltiplos" ou "Não são múltiplos".
export function isMultiple (a:number,b:number):string {
    var division = a%b  
    if(division === 0){
        console.log("São múltiplos")
        return 'multiplos'
    }else{
        console.log("Não são múltiplos")
        return 'não-multiplos'
    }
}

isMultiple(16,5)
