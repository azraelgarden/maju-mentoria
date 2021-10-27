const { expect, test } = require('@jest/globals');
const { findBiggerNumber } = require('../exercises/ex-10');

test('shouldReturnBiggerNumber', () => {
	expect(findBiggerNumber(10, 20, 5)).toBe(20);
});
test('shouldReturnError', () => {
	expect(findBiggerNumber('test', 20, 8)).toBe(
		'Por favor, insira somente números.'
	);
});
