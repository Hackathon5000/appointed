import React from 'react';
import Zipcode from '../zipcode/zipcode';
const Headers = () => {
	return (
		<div>
			<div className='jumbotron text-center'>
				<h1>Welcome to Miami Vaxx</h1>
				<h2>Provide your Zip Code to find the nearest Vaccination center</h2>
			</div>
			<Zipcode />
            
		</div>
	);
};

export default Headers;
