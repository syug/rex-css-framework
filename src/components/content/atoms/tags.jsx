import * as React from 'react';

export function getTag(type, text, isDisplayedIcon) {
  return isDisplayedIcon ? (
    <div className={`tag-wrapper ${type}`}>
      <span className="tag">{text}</span>
      <span className="close" />
    </div>
  ) : (<div className={`tag ${type}`}>{text}</div>);
}

export default function Tags(props) {
  const text = props.text ? props.text : '';
  const type = props.type ? props.type : '';
  const isDisplayedIcon = type.split(' ').includes('icon');

  return getTag(type, text, isDisplayedIcon);
}
