import * as React from 'react';
import { getContentSource } from './contentSource';

export function Section(props) {
  const { info: { data }, lang, tabTarget, type, className } = props;
  const content = getContentSource(data, tabTarget, lang);
  let options = {};

  if (className) {
    options.className = `rex-motion fadeIn ${className}`;
  }

  return(
    <section {...options}>
      <div className={`centered-content ${type}`}>
        {content}
      </div>
    </section>
  );
}
