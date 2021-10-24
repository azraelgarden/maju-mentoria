const { expect, test } = require('@jest/globals');
const { finalGrade } = require('../exercises/ex-5');

test('shouldReturnFinalGrade', () => {
	expect(finalGrade(9, 8.5, 9)).toBe(9);
});

test('shouldReturnError', () => {
	expect(finalGrade('test', 8, 9)).toBe('Por favor, insira somente números.');
});
