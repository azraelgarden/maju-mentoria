//Pokemon api call and usage

let pokemonArray = [];
let pkmn;
const createPokemonGridItem = (pokemon, count) => {
	const pokemonDiv = document.createElement('div');
	pokemonDiv.id = `pokemon-name-image-${pokemon.name}`;
	pokemonDiv.className = 'pokemon-name-image';
	const pokemonImage = document.createElement('img');
	pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`;
	pokemonImage.alt = `Picture of ${pokemon.name} `;
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
		if (filter === '') {
			pokemonDiv.style.display = 'block';
		} else if (pokemon.name.indexOf(filter) > -1) {
			pokemonDiv.style.display = 'block';
		} else {
			pokemonDiv.style.display = 'none';
		}
	});
}

//add and remove pokemons from list

const checkIfPokeIsOnList = pokemon => {
	pokeName = pokemon.name;
	var answer = '';
	var find = pokemonArray.find(elem => elem.name === pokeName);
	if (find) {
		return true;
	} else {
		return false;
	}
};

const removePokeFromArray = pokemon => {
	pokeName = pokemon.name;
	const index = pokemonArray.findIndex(p => p.name == pokeName);
	pokemonArray.splice(index, 1);
	return pokemonArray;
};

function addPoke(newPoke) {
	const pokemonGridItem = document.getElementById('pokemon-grid-item');
	var newPoke = prompt(
		'Great job on catching a new Pok??mon! Type the new Pok??mon Name'
	).toLowerCase();
	axios
		.get(`https://pokeapi.co/api/v2/pokemon/${newPoke}`)
		.then(response => {
			newPokemonName = response.data['name'];
			newPokemonId = response.data['id'];
			pokemon = {
				id: newPokemonId,
				name: newPokemonName,
				url: `https://pokeapi.co/api/v2/pokemon/${newPokemonId}/`
			};
			if (checkIfPokeIsOnList(pokemon) == false) {
				pokemonGridItem.appendChild(
					createPokemonGridItem(pokemon, newPokemonId)
				);
				alert(newPokemonName + ' added to list.');
			} else if (checkIfPokeIsOnList(pokemon) == true) {
				alert(newPokemonName + ' is already on the list.');
			}
		})
		.catch(err => {
			alert('Pok??mon not found, please try again');
			console.log('Error: ', err);
		});
}

function removePoke(pokeToRemove) {
	var pokeToRemove = prompt(
		'Type the name of the Pok??mon you want to remove.'
	).toLowerCase();
	const pokemonItem = document.getElementById(
		`pokemon-name-image-${pokeToRemove}`
	);
	axios
		.get(`https://pokeapi.co/api/v2/pokemon/${pokeToRemove}`)
		.then(response => {
			pokemonName = response.data['name'];
			pokemonId = response.data['id'];
			pokemon = {
				id: pokemonId,
				name: pokemonName,
				url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
			};
			if (checkIfPokeIsOnList(pokemon)) {
				removePokeFromArray(pokemon);
				pokemonItem.remove();
				alert(pokemonName + ' removed from list.');
			} else if (checkIfPokeIsOnList(pokemon) == false) {
				alert(pokemonName + ' was not found at list. ');
			}
		})
		.catch(err => {
			alert('Pok??mon not found, please try again');
			console.log('Error: ', err);
		});
}
