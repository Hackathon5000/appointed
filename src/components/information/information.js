import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const information = () => {
	return (
		<div>

			Hello from information
			<h1>Lorem ipsum lalalalalallala</h1>
			<div>
				<Button
					variant='primary'
					className='information-button'
					href='#mask'
					variant='outline-primary'
					size='lg'>
					Mask information
				</Button>

				<Button
                    variant="primary"
					className='information-button'
					href='#distance'
					variant='outline-primary'
					size='lg'>
					Distance Information
				</Button>
			</div>
			<div>
				<h1 id='mask'>MASK INFORMATION RIGHT HERE</h1>
				<h2>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</h2>
			</div>
			<div>
				<h1 id='distance'>DISTANCE INFORMATION BLAH</h1>
				<h2>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</h2>
			</div>
		</div>
	);
};

export default information;
