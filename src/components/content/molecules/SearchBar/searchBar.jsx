import * as React from 'react';
import { Icon } from '../../atoms/icon';

export default function SearchBar(props) {
  const type = props.type;
  const displayType = type ? ` ${type}` : '';

  return (
    <div className={`rex-search${displayType}`}>
      <div className="input-group">

        <div className="search-input-wrapper">
          { type === 'scope' || type === 'scope rounded' ? (
            <div className="search-selection">
              All
            </div>
          ) : null }
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-btn">
          <Icon name="search" />
        </div>
      </div>
    </div>
  );
}
