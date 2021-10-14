const createLi = pokemon => {
	const li = document.createElement('li');
	// add pokemon details to `li`
	li.textContent = `${pokemon.name}`;
	return li;
};

const appendToDOM = pokemons => {
	const ul = document.querySelector('ul');
	//iterate over all pokemons
	pokemons.map(pokemon => {
		ul.appendChild(createLi(pokemon));
		console.log(pokemon);
	});
};

const fetchPokemons = () => {
	axios
		.get('https://pokeapi.co/api/v2/pokemon/')
		.then(response => {
			const pokemons = response.data['results'];
			console.log(`GET list pokemons`, pokemons);
			appendToDOM(pokemons);
		})
		.catch(error => console.error(error));
};

fetchPokemons();
