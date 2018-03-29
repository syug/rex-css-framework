import * as React from 'react';

export default function RadioButton(props) {
  const radioClass = props.status ? props.status : '';
  const id = (props.status) ? `rex-radio-${props.status}` : 'rex-radio';
  const name = props.name ? props.name : null;

  const items = props.text.map(text => {
    const radioId = `${id}-${text}`;
    return (
      <div className={`radio-area ${radioClass}`} key={radioId}>
        <input type="radio" id={radioId} name={name} />
        <label htmlFor={radioId} className="radio-label">{text}</label>
      </div>
    );
  });

  const label = props.label ? (<p>{props.label}</p>) : null;
  return props.text.length > 1 ? (
    <div className="radio-form">
      {label}
      {items}
    </div>
  ) : items;
}
