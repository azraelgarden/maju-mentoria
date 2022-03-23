import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function SearchBar() {
	return (
		<div
			style={{
				display: 'flex',
				height: '3rem',
				alignContent: 'center'
			}}
		>
			<input
				type="text"
				placeholder="Search.."
				name="search"
				style={{
					padding: '1rem',
					borderRadius: '10px 0px 0px 10px',
					borderColor: 'white',
					outline: 'none',
					border: 'none'
				}}
			/>
			<button
				type="submit"
				style={{
					backgroundColor: 'ffffff',
					color: '#9B0D11',
					fontSize: '1rem',
					padding: '1rem',
					borderRadius: '0px 10px 10px 0px',
					border: '1px'
				}}
			>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</div>
	);
}

export default SearchBar;
