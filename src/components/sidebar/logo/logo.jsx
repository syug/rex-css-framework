import * as React from 'react';
import ex from '../../../assets/img/rex-css-framework.png';
import { root } from 'domain/middleware/routes';


export function Logo(props) {
	return (
    <div id="logo">
			<a href={`${root}`}>
				<img src={ex} className="ex" width="83" height="43" />
			</a>
		</div>
  );
}
