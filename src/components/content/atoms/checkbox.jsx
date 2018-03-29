import * as React from 'react';

export default function Checkbox(props) {
  const checkboxClass = props.type || '';
  const id = (props.type) ? `rex-checkbox-${props.type}` : 'rex-checkbox';

  return (
    <div className={`checkbox-area ${checkboxClass}`}>
      <input id={id} type="checkbox" />
      <label htmlFor={id} className="checkbox-label">{props.text}</label>
    </div>
  );
}
