import React from 'react';
import {MdChangeCircle} from 'react-icons/md';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>One-More-Note</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
				style={{border:'1px solid #212529',height:'50px',width:'70px'}}
			>
				<MdChangeCircle size={40}/>
			</button>
		</div>
	);
};

export default Header;
