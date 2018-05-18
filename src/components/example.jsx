import * as React from 'react';
import { Sidebar } from './sidebar/sidebar';
import { getTabs, getTabsTarget } from './content/contentTabs';
import { getContentSource } from './content/contentSource';

export function Example(props) {
	let LANG;
	const { menu, tabs, footer, colorSelect, localization, search, route: {contentSource}} = props;
	const tabTarget = getTabsTarget(tabs);

	switch (localization.currentLang) {
    case '日本語':
        LANG = 'jp';
      break;

    default:
        LANG = 'en';
      break;
  }

	const contentData = getContentSource(contentSource, tabTarget, LANG);


	return (
    <div className="page">
			{contentData}
		</div>
	);
}
