import React from 'react';
function PokemonCard() {
	return (
		<div
			style={{
				border: '4px solid #A6A6A6',
				width: '20rem',
				height: '20rem',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<h3 style={{ margin: '5px' }}>#1</h3>
			<img
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
				alt="Bulbassaur"
				style={{ width: '200px', margin: '10px', alignSelf: 'center' }}
			/>
			<h2 style={{ margin: '5px', alignSelf: 'center' }}>Bulbassaur</h2>
		</div>
	);
}

export default PokemonCard;
