//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.
function ageInDays(year, month, days) {
	let age = days + year * 365 + month * 30;
	console.log(`você viveu ${age} dias.`);
}

ageInDays(22, 3, 29);
