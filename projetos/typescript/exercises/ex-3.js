//Escreva um algoritmo que leia 3 números inteiros e mostre o maior deles.
function biggerNumber(a, b, c) {
	if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
		var result = Math.max(a, b, c);
		console.log(''.concat(result, ' \u00E9 o maior valor.'));
		return result;
	} else {
		console.log('Por favor, insira somente números.');
		return 'not-number';
	}
}
biggerNumber(10, 20, 30);
module.exports = { biggerNumber };
