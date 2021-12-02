//Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando se este número é 
//par ou ímpar, e se é positivo ou negativo.

function isIntegerAndPositive(x:number) {
	if(Number.isInteger(x) && Math.sign(x)==1 ){
        console.log(x + ' é inteiro e positivo')
        return 'Integer, positive'
    } else if(Number.isInteger(x) && Math.sign(x)== -1 ){
        console.log(x + ' é inteiro e negativo')
        return 'Integer, negative'
    }
    else if(Number.isInteger(x) ==false && Math.sign(x)==1){
        console.log(x + ' não é inteiro e é positivo')
        return 'not-integer, positive'
    } else if(Number.isInteger(x) ==false && Math.sign(x)== -1){
        console.log(x + ' não é inteiro e é negativo')
        return 'not-integer, negative'

    }
}
isIntegerAndPositive(-5)