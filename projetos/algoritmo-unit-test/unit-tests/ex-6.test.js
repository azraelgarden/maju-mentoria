const { expect, test } = require('@jest/globals');
const { eventDuration } = require('../exercises/ex-6');

test('shouldReturnEventDuration', () => {
	expect(eventDuration(3456)).toBe(
		'O evento teve a duração de 1 hora 58 minutos e 36 segundos.'
	);
});
test('shouldReturnError', () => {
	expect(eventDuration('test')).toBe('Por favor, insira somente números.');
});
