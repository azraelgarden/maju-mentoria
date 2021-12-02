//Escreva um algoritmo que leia o código de um aluno e suas três notas.
//Calcule a média ponderada do aluno e mostre "aprovado" ou "reprovado"

function studentGrade(grade1:number,grade2:number,grade3:number){
    if (typeof grade1 == 'number' && typeof grade2 == 'number' && typeof grade3 == 'number') {
        let highestGrade = Math.max(grade1,grade2,grade3);
        let finalGrade;
        switch (highestGrade) {
            case grade1:
                finalGrade = (( grade1 * 4 ) + (grade2  * 3) + (grade3 * 3)) /10
                if(finalGrade >=5){
                    console.log(`Aprovado com  nota ${finalGrade}`)
                    return `Aprovado com  nota ${finalGrade}` 
                } else {
                    console.log(`Reprovado com  nota ${finalGrade}`)
                    return `Reprovado com  nota ${finalGrade}`
                }
                
            case grade2:
                finalGrade = ((  grade2 * 4 ) + ( grade1 * 3) + ( grade3 * 3)) /10;
                if(finalGrade >=5){
                    console.log(`Aprovado com  nota ${finalGrade}`)
                    return `Aprovado com  nota ${finalGrade}` 
                } else {
                    console.log(`Reprovado com  nota ${finalGrade}`)
                    return `Reprovado com  nota ${finalGrade}`
                }
            case grade3:
                finalGrade= ((  grade3 * 4 ) + ( grade2 * 3) + ( grade1 * 3.)) /10;
                if(finalGrade >=5){
                    console.log(`Aprovado com  nota ${finalGrade}`)
                    return `Aprovado com  nota ${finalGrade}` 
                } else {
                    console.log(`Reprovado com  nota ${finalGrade}`)
                    return `Reprovado com  nota ${finalGrade}`
                }
            default:
                break;
        }
             
    } else {
        console.log('Por favor, insira somente números.') ;
        return 'not-number'
    }
    
}

studentGrade(3,7,4)