import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
	Distanceinfo,
	Homepage,
	information,
	Information,
	Maskinfo,
} from './components';

const App = () => {
	return (
		<div>
			<header></header>
			<main>
				<Homepage />
				<Switch>
					<Route exact path='/information'>
						<Information/>
					</Route>
				</Switch>
			</main>
			<footer></footer>
		</div>
	);
};

export default App;
