const { expect, test } = require('@jest/globals');
const { distanceBetween } = require('../exercises/ex-1');

test('shouldCalculateDistanceBetweenPoints', () => {
	expect(distanceBetween(8, -7, 8, -9)).toBe(2);
});

test('shouldReturnNaN', () => {
	distanceBetween();
	expect(distanceBetween(8, -7, 'b', -9)).toBe(NaN);
});
