import * as React from 'react';
import { Tabs } from './tabs';

export function getTabs(tabsData, currentLang) {
	let component = null;
  if (tabsData.enabled === true) {
    component = <Tabs data={tabsData} currentLang={currentLang}/>;
  }
	return component;
}

export function getTabsTarget(tabsData) {
	let tabTarget = 'designer';

	for(let x in tabsData.list) {
		if(tabsData.list[x].active) {
			tabTarget = tabsData.list[x].cookieValue;
			break;
		}
	}

	return tabTarget;
}
