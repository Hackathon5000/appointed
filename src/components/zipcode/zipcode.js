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


    // [{
    //     "name": "Jackson Memorial Hospital",
    //     "address": "1611 NW 12th Ave",
    //     "city": "Miami",
    //     "state": "FL",
    //     "zipcode": "33136",
    //     "havevaccine": false
    // },
    // {
    //     "name": "Marlin Stadium",
    //     "address": "501 Marlins. Way",
    //     "city": "Miami",
    //     "state": "FL",
    //     "zipcode": "33125",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Marlins Park",
    //     "address": "501 Marlins Way",
    //     "city": "Miami",
    //     "state": "FL",
    //     "zipcode": "33125",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Miami Hard Rock",
    //     "address": "347 Don Shula Dr",
    //     "city": "Miami Gardens",
    //     "state": "FL",
    //     "zipcode": "33056",
    //     "havevaccine": false
    // },
    // {
    //     "name": "Broward Soccer Stadium",
    //     "address": "1350 NW 55 St",
    //     "city": "Fort Lauderdale",
    //     "state": "FL",
    //     "zipcode": "33309",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Holiday Park",
    //     "address": "1150 G Harold Martin Drive",
    //     "city": "Fort Lauderdale",
    //     "state": "Fl",
    //     "zipcode": "33304",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Holiday Park (spoke site)",
    //     "address": "1150 G Harold Martin Drive",
    //     "city": "Fort Lauderdale",
    //     "state": "FL",
    //     "zipcode": "33304",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Boca Valley Plaza",
    //     "address": "7431 N. Federal Hwy",
    //     "city": "Boca Raton",
    //     "state": "FL",
    //     "zipcode": "33487",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Garden Shops at Boca",
    //     "address": "7060 Palmetto Park Rd.",
    //     "city": "Boca Raton",
    //     "state": "FL",
    //     "zipcode": "33433",
    //     "havevaccine": false
    // },
    // {
    //     "name": "Lakeside Square at Logger's Run",
    //     "address": "11650 W. Palmetto Park Road",
    //     "city": "Boca Raton",
    //     "state": "FL",
    //     "zipcode": "33428",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Mercado Real",
    //     "address": "1001 S. Federal Hwy",
    //     "city": "Boca Raton",
    //     "state": "FL",
    //     "zipcode": "33432",
    //     "havevaccine": false
    // },
    // {
    //     "name": "Palmetto Park Square",
    //     "address": "1339 W. Palmetto Park",
    //     "city": "Boca Raton",
    //     "state": "FL",
    //     "zipcode": "33486",
    //     "havevaccine": false
    // },
    // {
    //     "name": "Addison Centre Publix",
    //     "address": "16130 South Jog Road",
    //     "city": "Delray Beach",
    //     "state": "FL",
    //     "zipcode": "33446",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Delray Square",
    //     "address": "4771 West Atlantic Ave",
    //     "city": "Delray Beach",
    //     "state": "FL",
    //     "zipcode": "33445",
    //     "havevaccine": false
    // },
    // {
    //     "name": "North Delray Commons",
    //     "address": "555 NE 5th Ave",
    //     "city": "Delray Beach",
    //     "state": "FL",
    //     "zipcode": "33483",
    //     "havevaccine": false
    // },
    // {
    //     "name": "The Delray Marketplace",
    //     "address": "9239 Atlantic Ave",
    //     "city": "Delray Beach",
    //     "state": "FL",
    //     "zipcode": "33446",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Village of Oriole Plaza",
    //     "address": "7375 W Atlantic Ave",
    //     "city": "Delray Beach",
    //     "state": "FL",
    //     "zipcode": "33446",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Belmart Plaza",
    //     "address": "500 Belvedere Rd",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33405",
    //     "havevaccine": false
    // },
    // {
    //     "name": "Crosstown Plaza",
    //     "address": "2895 N. Military Trail",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33409",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Paradise Place",
    //     "address": "4075 N Haverhill Road",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33417",
    //     "havevaccine": false
    // },
    // {
    //     "name": "Polo Grounds Mall",
    //     "address": "926 South Military Trail",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33415",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Publix at Palm Beach Plaza",
    //     "address": "6820 Okeechobee Blvd",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33411",
    //     "havevaccine": false
    // },
    // {
    //     "name": "Shoppes at Andros Isle",
    //     "address": "8989 Okeechobee Blvd",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33411",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Shoppes at Ibis",
    //     "address": "10130 Northlake Blvd",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33412",
    //     "havevaccine": false
    // },
    // {
    //     "name": "South Florida Fairgrounds",
    //     "address": "9067 Southern Blvd",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33411",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Southdale Shopping Center",
    //     "address": "828 Southern Blvd",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33405",
    //     "havevaccine": true
    // },
    // {
    //     "name": "Village Commons",
    //     "address": "831 Village Blvd",
    //     "city": "West Palm Beach",
    //     "state": "FL",
    //     "zipcode": "33409",
    //     "havevaccine": false
    // }
    // ]