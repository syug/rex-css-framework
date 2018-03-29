import * as React from 'react';

export function Swatch(props) {

  const variable = props.variable;
  const color = props.color;
  const className = (props.className) ? ` ${props.className}` : '';

  const setColor = {
    background: `#${color}`
  }


  return(
    <div className={`swatch${className}`} style={setColor}>
      <small>{`#${color}`}</small>
      <small className="right">{`$${variable}`}</small>
    </div>
  );

}
