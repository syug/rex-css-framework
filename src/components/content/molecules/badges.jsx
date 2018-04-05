import * as React from 'react';
import cx from 'classnames';
import { Icon } from '../atoms/icon';

export default function Badges(props) {
  const { text, type, icon, iconType, linkLabel } = props;
  const badgeClass = cx('badge', type);
  const badgeWrapperClass = cx('badge', {icon: icon}, {link: linkLabel});
  let content;

  if (icon) {
    content = <Icon type={iconType} name={icon} />;
  } else if (linkLabel) {
    content = <a>{linkLabel}</a>;
  }

  return (
    <span className={badgeWrapperClass}>
      {content}
      <span className={badgeClass}>{text}</span>
    </span>
  );
}
