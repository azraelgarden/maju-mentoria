//O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
//distribuidor e dos impostos (aplicados ao custo de fábrica).
//Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%,
//escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.
function carCost(factoryCost) {
	if (typeof factoryCost == 'number') {
		let distributor = 1.28;
		let tax = 1.45;
		let taxValue = factoryCost * tax;
		let DistributorValue = taxValue * distributor;
		let distributorAndTax = taxValue + DistributorValue;

		let cost = factoryCost + distributorAndTax;
		let finalCost = cost.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL'
		});

		console.log(`O valor final do carro é ${finalCost} reais.`);

		return cost;
	} else {
		return 'Por favor, insira somente números.';
	}
}

carCost(15000);
module.exports = { carCost };
