//Pokemon api call and usage
let pokemonArray = [];
let pkmn;
const createPokemonGridItem = (pokemon, count) => {
	const pokemonDiv = document.createElement('div');
	pokemonDiv.id = `pokemon-name-image-${pokemon.name}`;
	pokemonDiv.className = 'pokemon-name-image';
	const pokemonImage = document.createElement('img');
	pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`;
	const pokemonName = document.createElement('p');
	pokemonName.textContent = `${pokemon.name}`;
	pokemonName.id = 'pokemon-name';

	pokemonDiv.appendChild(pokemonImage);
	pokemonDiv.appendChild(pokemonName);

	pkmn = {
		id: count,
		name: `${pokemon.name}`,
		image: pokemonImage.src
	};
	pokemonArray.push(pkmn);
	return pokemonDiv;
};

const appendToDOM = pokemons => {
	const pokemonGridContainer = document.getElementById(
		'pokemon-grid-container'
	);
	const pokemonGridItem = pokemonGridContainer.appendChild(
		document.createElement('div')
	);
	pokemonGridItem.id = 'pokemon-grid-item';
	//iterate over all pokemons
	let count = 0;
	pokemons.map(pokemon => {
		count += 1;
		pokemonGridItem.appendChild(createPokemonGridItem(pokemon, count));
	});
};

const fetchPokemons = () => {
	axios
		.get('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
		.then(response => {
			const pokemons = response.data['results'];
			appendToDOM(pokemons);
		})
		.catch(error => console.error(error));
};

fetchPokemons();

// filter
function filter() {
	var input, filter;
	input = document.getElementById('pokemon-search');
	filter = input.value.toLowerCase();
	filterTest(filter);
}
function filterTest(filter) {
	pokemonArray.map(pokemon => {
		let pokemonDiv = document.getElementById(
			`pokemon-name-image-${pokemon.name}`
		);
		if (pokemon.name.indexOf(filter) > -1) {
			pokemonDiv.style.display = 'block';
			console.log(pokemon.name);
		} else if (filter === '') {
			pokemonDiv.style.display = 'block';
		} else {
			pokemonDiv.style.display = 'none';
		}
	});
}
