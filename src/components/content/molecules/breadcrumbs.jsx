import * as React from 'react';

function isActive(isLast, t){
  if(isLast){
    return {
      class: 'active',
      child: (<span>{t}</span>)
    }
  } else {
    return {
      class: '',
      child: (<a href="#">{t}</a>)
    }
  }
}

export default function Breadcrumnbs(props) {
  const text = props.text;
  const lastKey = text.length - 1;
  const children = text.map((t, index) => {
    const sibling = isActive(index === lastKey, t)
      return (
        <li className={sibling.class} key={index.toString()}>
          {sibling.child}
      </li>)
  });
  return (
    <ul className="breadcrumbs">
      {children}
    </ul>
  );
}
