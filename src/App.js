import { useState, useEffect } from 'react';
// import { Input } from 'antd';
// import { useCombobox } from 'downshift';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { Homepage } from './Components';
	//  Distanceinfo, 
	// , Maskinfo, Map
import { UserContext } from './UserContext';

const App = () => {
	// const [inputItems, setInputitems] = useState([]);
	// const [users, setUsers] = useState([]);
	// const [singleUser, setSingleUser] = useState('');
	const [searchString, setSearchString] = useState('');
	const [zipcode, setZipcode] = useState('');
	const getSearchData = () => {
		const url = `https://api.weatherbit.io/v2.0/current?city=&key=
		${process.env.REACT_APP_STOCK_API_KEY}`;
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => setZipcode(resJson))
			.catch(() => console.log('There was an error'));
	};
	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then((res) => res.json())
	// 		.then((data) => setUsers(data));
	// }, []);

	// const {
	// 	isOpen,
	// 	getMenuProps,
	// 	getInputProps,
	// 	getComboboxProps,
	// 	highlightedIndex,
	// 	getItemProps,
	// } = useCombobox({
	// 	items: inputItems,
	// 	onInputValueChange: ({ inputValue }) => {
	// 		setInputitems(
	// 			users.filter((item) =>
	// 				item.name.toLowerCase().startsWith(inputValue.toLocaleLowerCase())
	// 			)
	// 		);
	// 	},
	// });

	return (
		<div>
			<UserContext.Provider
				value={{
					searchString,
					setSearchString,
					getSearchData,
				}}>
				<header></header>
				<main>
					<Switch>
						<Homepage />
					</Switch>
					{/* <h2>Current ZipCode: {singleUser}</h2> */}
					{/* <div {...getComboboxProps()}>
						<Input
							{...getInputProps()}
							placeholder='Search'
							enterButton='Search'
							size='large'
						/>
					</div> */}
					{/* <ul {...getMenuProps()}>
						{isOpen &&
							inputItems.map((item, index) => (
								<span
									key={item.id}
									{...getItemProps({ item, index })}
									onClick={() => setSingleUser(item.name)}>
									<li
										style={
											highlightedIndex === index ? { background: '#ede' } : {}
										}>
										<h4>{item.name}</h4>
									</li>
								</span>
							))}
					</ul> */}
				</main>
				<footer></footer>
			</UserContext.Provider>
		</div>
	);
};

export default App;
