//Um sistema de equações lineares...Escreva um algoritmo que lê os coeficientes
//a,b,c,d,e e f e calcula e mostra os valores de x e y.
function calculate(a, b, c, d, e, f) {
	let x = (c * e - b * f) / (a * e - b * d);
	let y = (a * f - c * d) / (a * e - b * d);

	console.log(`O valor de X é ${x} e de Y é ${y}.`);
}

calculate(1, 2, 3, 4, 5, 6);
