const { expect, test } = require('@jest/globals');
const { gradeAndApproval } = require('../exercises/ex-9');

test('shouldReturnFailedGrade', () => {
	expect(gradeAndApproval(5, 4, 7)).toBe('failed, 5.3');
});
test('shouldReturnApprovedGrade', () => {
	expect(gradeAndApproval(9, 8, 9.5)).toBe('approved, 8.8');
});
test('shouldReturnError', () => {
	expect(gradeAndApproval('test', 7.5, 8)).toBe(
		'Por favor, insira somente números.'
	);
});
