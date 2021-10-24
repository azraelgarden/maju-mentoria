const { expect, test } = require('@jest/globals');
const { calculate } = require('../exercises/ex-8');

test('shouldReturnCarCost', () => {
	expect(calculate(1, 2, 3, 4, 5, 6)).toBe('-1, 2');
});
test('shouldReturnError', () => {
	expect(calculate('test', 2, 3, 4, 5, 6)).toBe(
		'Por favor, insira somente números.'
	);
});
