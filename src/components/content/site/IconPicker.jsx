import React, { Component } from 'react';

export class IconPicker extends Component {


  constructor(props) {
    super(props);
    const firstIcon = this.props.icons[0];
    this.state = {
      selectedIcon: firstIcon
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(icon) {
    this.setState(prevState => ({
      selectedIcon: icon
    })) 
  }


  render(props) {
    const icons = this.props.icons;
    let selectedIcon = this.state.selectedIcon;

    let currentIcon = (
      <div className="current-icon text-primary">
        <i className={`rex-icon ${selectedIcon}`}></i>
      </div>
    );
    let currentIconCode = (
      <div className="current-icon-code">
        <pre>
        &lt;i class=&quot;rex-icon {selectedIcon}&quot;/&gt;
        </pre>
      </div>
    )
    let iconsList = [];
    

    for (const key in icons) {
      const icon = icons[key];
      iconsList[key] = (
        <div className="icon-sample col-sm-2 col-md-1" key={key}>
          <span onClick={ () => {this.handleClick(icon)}}>
            <i className={`rex-icon ${icon}`}></i>
          </span>
        </div>
      );
    }

    let displayIcons = (
      <div className="display-icons row text-primary">
        {iconsList}
      </div>
    );

    return(
      <div>
        {currentIcon}
        {currentIconCode}
        {displayIcons}
      </div>
    );
  }  
}
  