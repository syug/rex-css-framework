import * as React from 'react';
import { getContentSource } from '../contentSource';

export default function Row(props) {
  const { data, lang, tabTarget } = props;
  const className = props.className ? props.className : '';
  const content = getContentSource(data, tabTarget, lang);

  return(
    <div className={`row ${className}`}>
      {content}
    </div>
  );
}
