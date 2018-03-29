import * as React from 'react';
import { getContentSource } from './contentSource';

export function Column(props) {

  const data = props.info.data;	
  const { lang, tabTarget, type, cols, className } = props; 
  const content = getContentSource(data, tabTarget, lang);


  return(
    <div className={`col-md-${cols} ${className}`}>
      {content}
    </div>
  );

}
