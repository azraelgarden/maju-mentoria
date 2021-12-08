import { isIntegerAndPositive } from'../exercises/ex-5';

test('shouldReturnPositiveInteger', () => {
	expect(isIntegerAndPositive(3)).toBe('Integer, positive');
});

test('shouldReturnNegativeInteger', () => {
	expect(isIntegerAndPositive(-3)).toBe('Integer, negative');
});

test('shouldReturnNotIntegerPositive', () => {
	expect(isIntegerAndPositive(7.5)).toBe('not-integer, positive');
});

test('shouldReturnNotIntegerNegative', () => {
	expect(isIntegerAndPositive(-7.5)).toBe('not-integer, negative');
});
