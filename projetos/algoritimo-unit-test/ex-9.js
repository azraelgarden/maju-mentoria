//Calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado",
//caso a média seja igual ou superior a 6, ou a mensagem "reprovado", caso contrário.

function gradeAndApproval(grade1, grade2, grade3) {
	let grade = (grade1 + grade2 + grade3) / 3;
	let finalGrade = parseFloat(grade.toFixed(1));

	if (finalGrade >= 6) {
		console.log(`O aluno foi APROVADO com a nota ${finalGrade}.`);
	} else {
		console.log(`O aluno foi REPROVADO com a nota ${finalGrade}.`);
	}
}

gradeAndApproval(5, 4, 7);
gradeAndApproval(9, 8, 9.5);
