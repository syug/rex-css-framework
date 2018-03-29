import * as React from 'react';
import { Error } from './content/error';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Page } from './content/page';

export function ErrorPage(props) {
	const menu = props.menu;
	const tabs = props.tabs;
	const search = props.search;
	const colorSelect = props.colorSelect;
	const contentSource = props.route.contentSource;

	return (
    <div id="site">
			<div className="row">
				<div className="col-xs-3 col-xl-2">
					<Sidebar menu={menu} colorSelect={colorSelect} />
				</div>
				<div className="col-xs-9 col-xl-10">
          <section id="page">
            <Header colorSelect={colorSelect} search={search}/>
            <div id="error-page">
              <Error route={props.route.url} />
            </div>
          </section>
				</div>
			</div>
		</div>
	);
}
