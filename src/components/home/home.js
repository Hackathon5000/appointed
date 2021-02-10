import React from 'react';
import { Link } from 'react-router-dom';



const home = () => {
    return (
        <div>
            <h1>Welcome to Miami Vaxx</h1>
            <Link to={'/information'}>
                information
            </Link>

        </div>
    );
};

export default home;