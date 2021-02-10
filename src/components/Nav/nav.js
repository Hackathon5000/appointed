import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const nav = () => {
	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Link to='/'>
					<Navbar.Brand id='brand'>Miami Vaxx</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Link to='/information' className='nav-link'>
							COVID-19 Information
						</Link>
                        <Link to='/about' className='nav-link'>About us</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default nav;
