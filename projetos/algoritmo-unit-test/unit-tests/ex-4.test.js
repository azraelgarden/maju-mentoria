const { expect, test } = require('@jest/globals');
const { ageInDaysMonthsYears } = require('../exercises/ex-4');

test('shouldReturnAgeMonthsAndYears', () => {
	expect(ageInDaysMonthsYears(8149)).toBe(
		'Você viveu 22 anos, 3 meses e 29 dias.'
	);
});
test('shouldReturnError', () => {
	expect(ageInDaysMonthsYears('test')).toBe(
		'Por favor, insira somente números.'
	);
});
