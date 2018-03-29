import * as React from 'react';
import { setVisibleSectionCookie } from 'domain/middleware/cookie';
import { setTabsActiveAction } from 'domain/store/actions/tabsAction';

function actionTabActivator(selectedSection) {
  setVisibleSectionCookie(selectedSection);
  setTabsActiveAction(selectedSection);
}

export function Tabs(props) {

  const tabsList = props.data.list;
  const currentLang = props.currentLang;

  const tabsJSX = tabsList.map(function(item, key) {

    let isActive = null;
    let tabText = null;

    switch (currentLang) {
      case '日本語':
          tabText = item.text.jp;
        break;

      default:
          tabText = item.text.en;
        break;
    }

    if (item.active === true) {
      isActive = 'active';
    } else {
      isActive = 'inactive';
    }

    return (
      <li
        key={key}
        className={isActive}
        onClick={()=> {
          actionTabActivator(item.cookieValue)
        }}
      >
        {tabText}
      </li>
    );
  });

  return(
    <div id="tabs">
      <ul className="list-inline">
        {tabsJSX}
      </ul>
    </div>
  );
}