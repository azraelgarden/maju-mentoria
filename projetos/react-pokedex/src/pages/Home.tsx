import React from 'react';
import Header from '../components/common/Header';
import PokemonCard from '../components/PokemonCard';

function Home() {
	return (
		<section>
			<Header />
			<div
				style={{
					width: '80%',
					margin: '10px auto',
					gridGap: '15px',
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)'
				}}
			>
				<PokemonCard />
				<PokemonCard />
				<PokemonCard />
				<PokemonCard />
				<PokemonCard />
				<PokemonCard />
				<PokemonCard />
				<PokemonCard />
			</div>
		</section>
	);
}

export default Home;
