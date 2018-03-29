import * as React from 'react';
import { getTabs, getTabsTarget } from './contentTabs';
import { getContentSource } from './contentSource';
import { clearSearchAction } from 'domain/store/actions/searchAction';

export function Content(props) {
	let LANG;
  const tabsData = props.tabs;
	const jsonData = props.jsonData;
	const contentSource = props.contentSource;
  const tabTarget = getTabsTarget(tabsData);
  const currentLang = props.localization.currentLang;
  const printTabs = getTabs(tabsData, currentLang);

  switch (currentLang) {
    case '日本語':
        LANG = 'jp';
      break;
  
    default:
        LANG = 'en';
      break;
  }

  // TODO remove the need for tabTarget
  const contentData = getContentSource(contentSource, tabTarget, LANG);
  

  return (
    <section id="content" onClick={clearSearchAction}>
			{contentData}
    </section>
  );
}
