import * as React from 'react';

export default function LanguageSwitcher(props) {
  const text = props.text;
  const heading = text.heading;
  const subheading = text.subheading;
  const lang = text.lang;
  const cancel = text.cancel;
  const save = text.save;

  return (
    <div className="language-switcher">
      <div className="local-options visible">
        <h5>{heading}</h5>
        <p className="lang-subheading">
          <span className="lang-icon">
          <i className="rex-icon switch-language-l"></i>
          </span>
          <span className="lang-text">{subheading}</span>
        </p>
        <div className="current-lang">
          <span>{lang}</span>
          <div className="dropdown-btn">
            <div className="arrow-down">
            </div>
          </div>
        </div>
        <div className="local-select-options">
          <div className="lang-options">
          </div>
        </div>
        <div className="local-actions">
          <a className="switch-to-en">Switch to English</a>
          <a type="button" className="btn btn-default save">{save}</a>
          <a>{cancel}</a>
        </div>
      </div>
    </div>
  );
}