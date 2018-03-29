import * as React from 'react';

export function Select(props) {

  const options = props.options;
  const name = props.name;
  const type = props.type;
  const state = props.state;
  let attributes = {
    className: '',
    name: name
  }

  let printOptions = options.map(function(option, index) {
    const value = option.value;
    const text = option.text;
    return <option value={value} key={index}>{text}</option>
  });

  switch (state) {
    case 'disabled':
        attributes.disabled = 'disabled';
      break;

    default:
      break;
  }

  switch (type) {
    case 'multiple':
        attributes.multiple = 'multiple';
      break;

    default:
      break;
  }

  return(
    <div className="select-wrapper">
    <select name="select" {...attributes}>
      <option value="value1">Value 1</option>
      <option value="value2">Value 2</option>
      <option value="value3">Value 3</option>
    </select>
    <span className="select-arrow"></span>
  </div>
  );
}
