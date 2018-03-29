import * as React from 'react';

export function Image(props) {
	const src = props.src;
	const type = props.type;
	const responsive = props.responsive;
	const className = props.className;
	const option = props.option;

	let attributes = {};

	if(responsive) {
		attributes.className = `${className} img-responsive`;
	} else {
		attributes.className = `${className}`;
	}

	switch (type) {
		case 'rounded':
			if(responsive) {
				attributes.className += ' img-rounded';		
			} else {
				attributes.className += 'img-rounded';
			}
			break;
		case 'circle':
			if(responsive) {
					attributes.className += ' img-circle';
				} else {
					attributes.className += 'img-circle';		
				}
			break;
		case 'thumbnail':
			if(responsive) {
					attributes.className += ' img-thumbnail';		
				} else {
					attributes.className += 'img-thumbnail';		
				}
			break;
	
		default:
			break;
	}

	switch (option) {
		case 'border':
			if(responsive) {
				attributes.className += ' img-border';		
			} 
			break;
	
		default:
			break;
	}
	

	if( (src != '') && (typeof src !== 'undefined') ) {
		attributes.src = src;
	}

	return (
		<img
			{...attributes}
		/>
	);
}
