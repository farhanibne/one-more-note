import React from 'react';
import { FcSearch } from 'react-icons/fc';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<FcSearch className='search-icons' size='1.3em' style={{paddingLeft:'15px'}} />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
				style={{padding:'15px'}}
			/>
		</div>
	);
};

export default Search;
