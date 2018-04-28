import * as React from 'react';
import logo from '../../../assets/img/r-logo-white.svg';
import ex from '../../../assets/img/rex-css-framework.png';
import { root } from 'domain/middleware/routes';


export function Logo(props) {
	return (
    <div id="logo">
      <a href='https://corp.rakuten.co.jp/' className="corp-logo" >
        <img src={logo} />
      </a>
			<a href={`${root}`}>
				<img src={ex} className="ex" width="83" height="43" />
			</a>
		</div>
  );
}
