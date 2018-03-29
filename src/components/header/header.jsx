import * as React from 'react';
import { Search } from './search/search';
import { Localization } from './localization/localization';
import { ColorPicker } from './colorPicker/colorPicker';

export function Header(props) {
  const colorSelect = props.colorSelect;
  const localization = props.localization;
  const currentLang = localization.currentLang;

  return (
    <section id="header">
      <div className="header-inner">
        <div className="row">
          <div className="col-md-7">
            <Search search={props.search} currentLang={currentLang} />
          </div>
          <div className="col-xs-8 col-md-4">
            <a target="_blank" href="https://git.rakuten-it.com/projects/REX/repos/rex-css-framework/browse">
              <div className="repo-link local-extended">
                <i className="rex-icon server-l"></i>
                <small>Git repo</small>
              </div>
            </a>
            <Localization localization={localization} />
          </div>
          <div className="col-xs-4 col-md-1">
            <ColorPicker colorSelect={colorSelect} />
          </div>
        </div>
      </div>
    </section>
  );
}
