import * as React from 'react';
import { Heading } from './atoms/heading';
import { Text } from './atoms/text';

function canShow(obj, target) {
	if(obj.indexOf(target) != -1) {
		return true;
	} else {
		return false;
	}
}

export function ContentHeader(props) {
	
	const { info: { target, tabTarget, data, component }, lang } = props;

	const content = data.map(function(info, key) {

		let component = null;

		if(canShow(info.target, tabTarget)) {

			switch (info.component) {
				case 'Heading':
					component = <Heading type={info.type} text={info.text[lang]} key={key}/>;

					break;
				case 'Text':
					component = <Text type={info.type} text={info.text[lang]} key={key}/>;

					break;
			}
		}

		return component;
	});

	if(canShow(target, tabTarget)) {

	  return (
	    <section id="content-header">
				{content}
	    </section>
	  );

	} else {
		return null;
	}
}
