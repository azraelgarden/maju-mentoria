const { expect, test } = require('@jest/globals');
const { ageInDays } = require('../exercises/ex-3');

test('shouldReturnAgeInDays', () => {
	expect(ageInDays(22, 3, 29)).toBe(8149);
});

test('shouldReturnErros', () => {
	expect(ageInDays(2, 'b', 3)).toBe('Por favor, insira somente números.');
});
