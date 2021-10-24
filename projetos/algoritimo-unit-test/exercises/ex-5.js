//Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é
//ponderada e que o peso das notas é: 2,3 e 5, respectivamente.
function finalGrade(grade1, grade2, grade3) {
	if (
		typeof grade1 == 'number' &&
		typeof grade2 == 'number' &&
		typeof grade3 == 'number'
	) {
		let a = grade1 * 2;
		let b = grade2 * 3;
		let c = grade3 * 5;
		let finalGrade = Math.round((a + b + c) / 10);
		console.log(`A média final do aluno é ${finalGrade}.`);
		return finalGrade;
	} else {
		return 'Por favor, insira somente números.';
	}
}

finalGrade(9, 'test', 9);

module.exports = { finalGrade };
