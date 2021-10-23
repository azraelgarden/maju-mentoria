//Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.

function eventDuration(seconds) {
	let hours = Math.round(seconds / 3600);
	let minutes = Math.round((seconds % 3600) / 60);
	let newSeconds = Math.round(seconds % 60);

	console.log(
		`O evento teve a duração de ${hours} hora ${minutes} minutos e ${newSeconds} segundos.`
	);
}

eventDuration(3456);
