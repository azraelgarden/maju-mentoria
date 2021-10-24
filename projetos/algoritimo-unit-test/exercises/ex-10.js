//Elaborar um algoritmo que lê 3 valores a,b,c e os escreve. A seguir, encontre o maior dos 3 valores e o escreva com a mensagem : "É o maior ".
function findBiggerNumber(a, b, c) {
	if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
		let result = Math.max(a, b, c);
		console.log(`${result} é o maior valor.`);
		return result;
	} else {
		return 'Por favor, insira somente números.';
	}
}
findBiggerNumber(10, 20, 5);

module.exports = { findBiggerNumber };
