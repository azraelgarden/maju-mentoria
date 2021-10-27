//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.
function ageInDays(year, month, days) {
	if (
		typeof year == 'number' &&
		typeof month == 'number' &&
		typeof days == 'number'
	) {
		let age = days + year * 365 + month * 30;
		console.log(`você viveu ${age} dias.`);
		return age;
	} else {
		return 'Por favor, insira somente números.';
	}
}

ageInDays(22, 3, 29);

module.exports = { ageInDays };
