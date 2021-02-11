import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Route, Switch } from 'react-router-dom';
import Zipcode from "../Zipcode/Zipcode.js"
// import Input from "../Input/Input"

const Homepage = () => {
	return (
		<div>
			{/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
				<h1>Welcome to Miami Vaxx</h1>
			{/* </div> */}
			{/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
				<h2>
					Click on the information tab to find out how you can get tested for
					Covid 19
				</h2>
				<h2>Please enter your zipcode to find the clinic in that zipcode</h2>
				<h3>Zipcode</h3>
				<Zipcode/>
			{/* </div> */}
			<div>
				
			</div>
		</div>
	);
};

export default Homepage;
