import * as React from 'react';
import { Icon } from '../atoms/icon';

export default function Badges(props) {
  let badgeClasses = 'badge';
  const { text, icon, iconType } = props;
  switch (props.type) {
    case 'round':
      badgeClasses += ' round';
      break;
    case 'pill':
      badgeClasses += ' pill';
      break;
    case 'empty':
      badgeClasses += ' empty';
      break;
    default:
  }

  return (
    <span className="badge">
      {icon ? (<Icon type={iconType} name={icon} />) : null}
      <span className={badgeClasses}>{text}</span>
    </span>
  );
}
