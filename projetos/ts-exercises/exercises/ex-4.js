//Escreva um algoritmo que leia o código de um aluno e suas três notas.
//Calcule a média ponderada do aluno e mostre "aprovado" ou "reprovado"
function studentGrade(grade1, grade2, grade3) {
    var highestGrade = Math.max(grade1, grade2, grade3);
    var finalGrade;
    switch (highestGrade) {
        case grade1:
            finalGrade = ((grade1 * 4) + (grade2 * 3) + (grade3 * 3)) / 10;
            if (finalGrade >= 5) {
                console.log("Aprovado com  nota ".concat(finalGrade));
                return "Aprovado com  nota ".concat(finalGrade);
            }
            else {
                console.log("Reprovado com  nota ".concat(finalGrade));
                return "Reprovado com  nota ".concat(finalGrade);
            }
        case grade2:
            finalGrade = ((grade2 * 4) + (grade1 * 3) + (grade3 * 3)) / 10;
            if (finalGrade >= 5) {
                console.log("Aprovado com  nota ".concat(finalGrade));
                return "Aprovado com  nota ".concat(finalGrade);
            }
            else {
                console.log("Reprovado com  nota ".concat(finalGrade));
                return "Reprovado com  nota ".concat(finalGrade);
            }
        case grade3:
            finalGrade = ((grade3 * 4) + (grade2 * 3) + (grade1 * 3.)) / 10;
            if (finalGrade >= 5) {
                console.log("Aprovado com  nota ".concat(finalGrade));
                return "Aprovado com  nota ".concat(finalGrade);
            }
            else {
                console.log("Reprovado com  nota ".concat(finalGrade));
                return "Reprovado com  nota ".concat(finalGrade);
            }
        default:
            break;
    }
}
studentGrade(3, 7, 4);
module.exports = { studentGrade: studentGrade };
