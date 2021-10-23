//Escreva um algoritmo que leia três números inteiros e positivos (A, B, C) e calcule...
function calculateD(a, b, c) {
	if (
		isIntegerAndPositive(a) &&
		isIntegerAndPositive(b) &&
		isIntegerAndPositive(c)
	) {
		let r = Math.pow(a + b, 2);
		let s = Math.pow(b + c, 2);
		let d = (r + s) / 2;
		console.log(`O valor de D é ${d}.`);
	} else {
		console.log('Os valores precisam ser números inteiros e positivos.');
	}
}

calculateD(2, 5, 4);

function isIntegerAndPositive(x) {
	condition = '';
	if (
		Number.isInteger(x) == false ||
		Math.sign(x) == -1 ||
		Math.sign(x) == -0
	) {
		condition = false;
	} else {
		condition = true;
	}
	return condition;
}
