const { expect, test } = require('@jest/globals');
const { carCost } = require('../exercises/ex-7');

test('shouldReturnCarCost', () => {
	expect(carCost(15000)).toBe(64590);
});
test('shouldReturnError', () => {
	expect(carCost('test')).toBe('Por favor, insira somente números.');
});
