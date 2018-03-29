import * as React from 'react';
import { getCurrentColorCookie } from 'domain/middleware/cookie';
import { root } from 'domain/middleware/routes';
import customClassName from 'domain/middleware/prismCustomSetting';

require('style/prototype/app-default');
require('style/prototype/app');


export function App(props) {
  const state = props.state;
	const content = state.content;
	const DynamicModule = state.router.current.module;
  const colorSelect = props.state.content.colorSelect;
  let theme = 'default';
  let toggleStyleSheet;
  if(typeof colorSelect.currentColor !== 'undefined'){
    theme = colorSelect.currentColor
  } else {
    theme = getCurrentColorCookie();
    previewDefault = getCurrentColorCookie();
  }
	let currentTheme = `${root}themes/${theme}.css`;
  if(NODE_ENV === 'development') {

  }
  if(NODE_ENV === 'production') {
    toggleStyleSheet = <link rel="stylesheet" href={currentTheme} />;
    currentTheme = `http://localhost:9090/themes/${theme}.css`;
    require('style/prototype/app-blue');
    require('style/prototype/app-red');
    require('style/prototype/app-green');
    require('style/prototype/app-yellow');
    require('style/prototype/app-purple');
    require('style/prototype/app-pink');
    require('style/prototype/app-blue');
    require('style/prototype/app-dark-blue');
  }

  customClassName();

  return (
    <div id="app" className="container-fluid">
      {toggleStyleSheet}
      {DynamicModule(content)}
    </div>
  );
}
