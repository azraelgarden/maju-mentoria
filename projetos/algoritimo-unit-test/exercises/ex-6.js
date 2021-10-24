//Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.
function eventDuration(seconds) {
	if (typeof seconds == 'number') {
		let hours = Math.round(seconds / 3600);
		let minutes = Math.round((seconds % 3600) / 60);
		let newSeconds = Math.round(seconds % 60);

		console.log(
			`O evento teve a duração de ${hours} hora ${minutes} minutos e ${newSeconds} segundos.`
		);
		return `O evento teve a duração de ${hours} hora ${minutes} minutos e ${newSeconds} segundos.`;
	} else {
		return 'Por favor, insira somente números.';
	}
}

eventDuration(3456);
module.exports = { eventDuration };
