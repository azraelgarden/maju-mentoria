import { studentGrade } from '../exercises/ex-4';

test('shouldReturnFailedGrade', () => {
	expect(studentGrade(3, 7, 4)).toBe('Reprovado com  nota 4.9');
});

test('shouldReturnApprovedGrade', () => {
	expect(studentGrade(10, 9, 7.5)).toBe('Aprovado com  nota 8.95');
});
