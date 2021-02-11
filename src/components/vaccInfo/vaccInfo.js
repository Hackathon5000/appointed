import React, { useContext } from 'react';
import { UserContext } from '../../UserContext.js';
import Form from '../Form/vaccineForm.jsx'
const VaccInfo = () => {
	const { vaccCenter, searchString, centersinZip, getSearchData } = useContext(UserContext);
	if (vaccCenter.zipcode !== searchString) {
		return <h1>Can't find a location with the vaccine in your Zip code</h1>;
	} else if (vaccCenter.zipcode === searchString && vaccCenter.havevaccine !== true) {
		return (<div>
            <h3>Sorry there are no vaccines available at this zip code</h3>
        </div>);
	} else if (vaccCenter.zipcode === searchString && vaccCenter.havevaccine === true) {
		return (
			<>
				<h2> {vaccCenter.name}</h2>
				<h3>
					{vaccCenter.address},{vaccCenter.city},{vaccCenter.state},
					{vaccCenter.zipcode}
				</h3>
				<h4>Do they have the vaccine? {vaccCenter.havevaccine.toString()}</h4>
                {centersinZip[0]}
                <Form/>
			</>
		);
	}
};

export default VaccInfo;
