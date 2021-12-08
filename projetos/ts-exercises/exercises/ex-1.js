//Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem:
//"São múltiplos" ou "Não são múltiplos".
function isMultiple(a, b) {
	var division = a % b;
	if (division === 0) {
		console.log('São múltiplos');
		return 'multiplos';
	} else {
		console.log('Não são múltiplos');
		return 'não-multiplos';
	}
}
isMultiple(20, 5);
module.exports = { isMultiple: isMultiple };
