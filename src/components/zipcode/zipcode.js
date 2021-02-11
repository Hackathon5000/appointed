import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
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
					placeholder='zipcode'
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
