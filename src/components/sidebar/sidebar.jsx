import * as React from 'react';
import { clearSearchAction } from 'domain/store/actions/searchAction';
import { Logo } from './logo/logo';
import { Menu } from './menu/menu';

export function Sidebar(props) {

  const colorSelect = props.colorSelect;
  const localization = props.localization;
  const body = document.body;
  const html = document.documentElement;
  const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  // const intViewportHeight = window.innerHeight;
  const style = {
    height: `${documentHeight} px`,
  };

  const menu = props.menu;

  return (
    <section id="sidebar" onClick={clearSearchAction}>
      <nav style={style}>
        <Logo colorSelect={colorSelect} />
        <div className="version">v1.2.1 (experimental)</div>
        <Menu menu={menu} localization={localization} />
      </nav>
    </section>
  );
}
