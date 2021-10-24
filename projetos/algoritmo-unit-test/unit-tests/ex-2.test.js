const { expect, test } = require('@jest/globals');
const { calculateD } = require('../exercises/ex-2');
const { isIntegerAndPositive } = require('../exercises/ex-2');

// calculateD
test('shouldReturnD', () => {
	expect(calculateD(2, 4, 4)).toBe(50);
});
test('shouldReturnError', () => {
	expect(calculateD(2, 'b', 4)).toBe(
		'Por favor, insira números inteiros e positivos.'
	);
});

//isIntegerAndPositive
test('shouldReturnFalse', () => {
	expect(isIntegerAndPositive(2)).toBe(true);
});
test('shouldReturnTrue', () => {
	expect(isIntegerAndPositive('b')).toBe(false);
	expect(isIntegerAndPositive(-3)).toBe(false);
});
