import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from './UserContext';

import './App.css';

import Home from './components/home/home';
import Information from './components/information/information';
import DistanceInfo from './components/distanceInfo/distanceInfo';
import MaskInfo from './components/maskInfo/maskInfo';
import Nav from './components/Nav/nav';
import About from './components/about/about';
import VaccineForm from './components/Form/vaccineForm.jsx';
import Homepage from './components/homepage/homepage.js';

function App() {
	const [searchString, setSearchString] = useState('');
	const getSearchData = () => {
		// var myInit = {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	mode: 'cors',
		// 	cache: 'default',
		// };

		const myRequest = new Request('./Data.json');

		fetch(myRequest)
			.then((res) => res.json())
			.then((data) => console.log(data))
		  .catch(() => alert('There was an error'));
	}


	return (
		<div className='App'>
			<UserContext.Provider
				value={{
					searchString,
					setSearchString,
					getSearchData,
				}}>
				<header>
					<Nav />
				</header>
				<main>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/information'>
							<Information />
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/distanceinfo'>
							<DistanceInfo />
						</Route>
						<Route exact path='/maskinfo'>
							<MaskInfo />
						</Route>
						<Route exact path='/maskinfo'>
							<MaskInfo />
						</Route>
						<Route exact path='/vaccineform'>
							<VaccineForm />
						</Route>
					</Switch>
					<Homepage />
				</main>
				<footer></footer>
			</UserContext.Provider>
		</div>
	);
}

export default App;
