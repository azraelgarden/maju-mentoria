//Escreva um algoritmo que leia 3 números inteiros e mostre o maior deles.
function biggerNumber(a:number,b:number,c:number) {
    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
		let result = Math.max(a, b, c);
		console.log(`${result} é o maior valor.`);
		return result;
	} else {
		console.log('Por favor, insira somente números.')
		return 'not-number' ;
	}
}
biggerNumber(10,20,30)
