import * as React from 'react';
import { getContentSource } from '../contentSource';

export default function Row(props) {
  const { data, lang, tabTarget, type, className } = props;
  const content = getContentSource(data, tabTarget, lang);

  return(
    <div className="row">
      {content}
    </div>
  );
}
