// Construa um algoritmo que, tendo como dados de entrada dois pontos quaisquer no plano, P(x1,y1) e P(x2,y2), escreva a distância entre eles.
function distanceBetween(x1, y1, x2, y2) {
	let x = Math.pow(x2 - x1, 2);
	let y = Math.pow(y2 - y1, 2);

	let distance = Math.sqrt(x + y);

	console.log(`a distância é: ${distance}.`);
}

distanceBetween(-3, -11, 2, 1);
