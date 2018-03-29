import * as React from 'react';

export function Heading(props) {
	const type = props.type;
	const	text = props.text;
	const	secondary = props.secondary;

  let component = null;
	let showSecondary = false;

	if( (secondary != '') && (typeof secondary !== 'undefined') ) {
		showSecondary = true;
	}

  switch (type) {
    case 'h2':
      component = <h2>{text}</h2>;

			if(showSecondary) {
				component = <h2>{text} <small>{secondary}</small></h2>;
			}

      break;
    case 'h3':
			component = <h3>{text}</h3>;

			if(showSecondary) {
				component = <h3>{text} <small>{secondary}</small></h3>;
			}

      break;
    case 'h4':
			component = <h4>{text}</h4>;

			if(showSecondary) {
				component = <h4>{text} <small>{secondary}</small></h4>;
			}

      break;
    case 'h5':
			component = <h5>{text}</h5>;

			if(showSecondary) {
				component = <h5>{text} <small>{secondary}</small></h5>;
			}

      break;
    case 'h6':
			component = <h6>{text}</h6>;

			if(showSecondary) {
				component = <h6>{text} <small>{secondary}</small></h6>;
			}

      break;
    default:
			component = <h1>{text}</h1>;

			if(showSecondary) {
				component = <h1>{text} <small>{secondary}</small></h1>;
			}

      break;
  }

  return component;
}
