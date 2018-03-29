import * as React from 'react';

export function BrandColor(props) {

  const variable = props.variable;
  const color = props.color;

  const setColor = {
    color: `#${color}`
  }


  return(
    <div className="brand-color">
      <div className="r-logo">
        <i className="rex-icon logo" style={setColor}></i>
      </div>
      <small>{`#${color}`}</small>
      <small>{`$${variable}`}</small>
    </div>
  );

}
