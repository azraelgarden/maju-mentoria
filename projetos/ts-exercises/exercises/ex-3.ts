//Escreva um algoritmo que leia 3 números inteiros e mostre o maior deles.
export function biggerNumber(a:number,b:number,c:number):number {
	let result = Math.max(a, b, c);
	console.log(`${result} é o maior valor.`);
	return result;	
}

biggerNumber(10,20,30)

