//Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.
function ageInDaysMonthsYears(days) {
	if (typeof days == 'number') {
		let years = Math.round(days / 365);
		let months = Math.trunc((days % 365) / 30);
		let newDays = (days % 365) % 30;
		console.log(`Você viveu ${years} anos, ${months} meses e ${newDays} dias.`);
		return `Você viveu ${years} anos, ${months} meses e ${newDays} dias.`;
	} else {
		return 'Por favor, insira somente números.';
	}
}

ageInDaysMonthsYears(8149);

module.exports = { ageInDaysMonthsYears };
