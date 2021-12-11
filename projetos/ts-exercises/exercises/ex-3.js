//Escreva um algoritmo que leia 3 números inteiros e mostre o maior deles.
function biggerNumber(a, b, c) {
    var result = Math.max(a, b, c);
    console.log("".concat(result, " \u00E9 o maior valor."));
    return result;
}
biggerNumber(10, 20, 30);
module.exports = { biggerNumber: biggerNumber };
