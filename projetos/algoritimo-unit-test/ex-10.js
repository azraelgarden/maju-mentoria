//Elaborar um algoritmo que lê 3 valores a,b,c e os escreve. A seguir, encontre o maior dos 3 valores e o escreva com a mensagem : "É o maior ".
function findBiggerNumber(a, b, c) {
	let result = Math.max(a, b, c);
	console.log(`${result} é o maior valor.`);
}
findBiggerNumber(10, 20, 5);
