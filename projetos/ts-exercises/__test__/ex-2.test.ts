import { swimmersCategory } from "../exercises/ex-2";

test('shouldReturnInfantilA', () => {
	expect(swimmersCategory(6)).toBe('IA');
});

test('shouldReturnInfanfilB', () => {
	expect(swimmersCategory(9)).toBe('IB');
});
test('shouldReturnJuvenilA', () => {
	expect(swimmersCategory(12)).toBe('JA');
});
test('shouldReturnJuvenilB', () => {
	expect(swimmersCategory(15)).toBe('JB');
});
test('shouldReturnAdulto', () => {
	expect(swimmersCategory(18)).toBe('AD');
});
