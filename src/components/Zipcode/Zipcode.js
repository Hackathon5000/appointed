import React, { useContext } from 'react';
import { UserContext } from '../../UserContext.js';
// import './Input.css';
// import 'react-dropdown/style.css';

const Zipcode = () => {
	const {
		searchString,
		setSearchString,
		getSearchData,
	} = useContext(UserContext);

	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					getSearchData();
				}}>
				<input
					type='text'
					placeholder='enter your ZipCode'
					value={searchString}
					onChange={(event) => setSearchString(event.target.value)}
				/>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Zipcode;
