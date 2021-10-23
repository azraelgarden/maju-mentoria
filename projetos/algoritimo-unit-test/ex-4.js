//Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.
function ageInDaysMonthsYears(days) {
	let years = Math.round(days / 365);
	let months = Math.trunc((days % 365) / 30);
	let newDays = (days % 365) % 30;
	console.log(`você viveu ${years} anos, ${months} meses e ${newDays} dias.`);
}

ageInDaysMonthsYears(8149);
