import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Route, Switch} from 'react-router-dom';

const Homepage = () => {
	return (
		<div>
			<h1>Welcome to Miami Vaxx</h1>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h2>
					Click on the information tab to find out how you can get tested for
					Covid 19
				</h2>
			</div>
			<div style={{ height: '30px', background: 'gray' }}>
				<Link to={'../Information'}>Information</Link>
				<Switch>
					
					
					
				</Switch>
			</div>
		</div>
	);
};

export default Homepage;
