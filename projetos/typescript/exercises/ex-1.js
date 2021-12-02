//Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: 
//"São múltiplos" ou "Não são múltiplos".
function isMultiple(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        var division = a % b;
        if (division === 0) {
            console.log("São múltiplos");
            return 'multiplos';
        }
        else {
            console.log("Não são múltiplos");
            return 'não-multiplos';
        }
    }
    else {
        console.log("Por favor, preencha com números.");
        return 'not-number';
    }
}
isMultiple(20, 5);
