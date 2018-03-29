import * as React from 'react';
import { setMenuActiveAction } from 'domain/store/actions/menuAction';

export function MenuItem(props) {

  const active = props.data.active;
  const currentLang = props.localization.currentLang;
  const id = props.data.id;
  const link = props.data.link;
  const disabled = props.data.disabled;

  let text = props.data.text;
  let options = {'className': 'nav-link'};
  let subMenuOption = null;
  let isDisabled = null;


  switch (currentLang) {
    case '日本語':
        text = props.data.text.jp;
      break;  
    default:
        text = props.data.text.en;
      break;
  }
  

  if( active === true) {
    options.className += ' active';
  }
  if (disabled == true ) {
    options.className += ' disabled';
    isDisabled = 'disabled';
  }

  return (
    <li {...options}>
      <a href={link}>
        <span>
        {text}
        </span>
      </a>
    </li>
  );
}
