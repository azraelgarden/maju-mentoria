import { isMultiple } from "../exercises/ex-1";

test('shouldCheckIfNumbersAreMultiple', () => {
	expect(isMultiple(20, 5)).toBe('multiplos');
});

test('shouldReturnNotMultiple', () => {
	expect(isMultiple(16, 5)).toBe('não-multiplos');
});
