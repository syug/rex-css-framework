import * as React from 'react';
import Label from '../atoms/labels';
import Rating from '../atoms/rating';
import { Routes } from '../../../domain/middleware/routes';

export function landscape(size, header, description, image) {
  const type = size || '';
  return (
    <div className={`card ${type}`}>
      <CardMedia>
        <img src={image} alt="" />
      </CardMedia>
      <CardContent header={header} description={description}>
        <CardAction>
          <a className="button">Read more</a>
          <a className="button"><span className="more" /></a>
        </CardAction>
      </CardContent>
    </div>
  );
}

export function fullImage(header, image) {
  return (
    <div className="card image">
      <CardMedia overlayTitle={header} overlaySubtitle="Located in Kyoto, Japan">
        <img src={image} alt="" />
      </CardMedia>
    </div>
  );
}

export function cardsWithText(type, header, description) {
  return (
    <div className={`card ${type}`}>
      <CardContent header={header} description={description}>
        <CardAction>
          <a className="button">Learn more</a>
        </CardAction>
      </CardContent>
    </div>
  );
}

export function panel(header, price, currency, image, submenu) {
  let overflowMenu;
  if (submenu) {
    overflowMenu = <OverflowMenu submenu={submenu} />;
  }
  return (
    <div className="card panel">
      <CardMedia>
        <img src={image} alt="" />
      </CardMedia>
      <CardContent header={header} >
        <div className="price">{price}<span className="currency">{currency}</span></div>
        <CardLabel type="top">
          <Label text="NEW" />
        </CardLabel>
        <CardLabel type="badge">
          <Label text="1st" type="circular" subtype="stamp" />
        </CardLabel>
        <div className="title">
          Hakodate Yu River Onsen Hotel
        </div>
        <div className="rating-wrapper">
          <Rating />
          <span className="count">(87)</span>
        </div>
        <div className="divider" />
        <CardAction>
          <a className="button">Availability</a>
          <a className="button">Locatoin</a>
          <a className="button"><span className="more" /></a>
        </CardAction>
      </CardContent>
      {overflowMenu}
    </div>
  );
}

export function contentWrapper(content, className) {
  return (
    <div className={className}>
      {content}
    </div>
  );
}

export function CardContent(props) {
  const content = {
    header: props.header ? contentWrapper(props.header, 'header') : null,
    description: props.description ? contentWrapper(props.description, 'description') : null,
    children: props.children ? props.children : null,
  };

  return (
    <div className="content">
      {content.header}
      {content.description}
      {content.children}
    </div>
  );
}

export function CardAction(props) {
  return contentWrapper(props.children, 'extra contents');
}

export function CardMedia(props) {
  return (
    (props.overlayTitle || props.overlaySubtitle) ? (
      <div className="media">
        {props.children}
        <div className="overlay">
          <div className="title">{props.overlayTitle}</div>
          <div className="subtitle">{props.overlaySubtitle}</div>
        </div>
      </div>
    ) : props.children
  );
}

export function CardLabel(props) {
  const type = props.type || '';
  return contentWrapper(props.children, type);
}

export default function Cards(props) {
  const type = props.type || '';
  const image = props.image ? `${Routes.SITE_ROOT}${props.image}` : '';
  let content;
  switch (type) {
    case 'size': {
      content = landscape(props.size, props.header, props.description, image);
      break;
    }
    case 'image': {
      content = fullImage(props.header, image);
      break;
    }
    case 'panel': {
      content = panel(props.header, props.price, props.currency, image, props.submenu);
      break;
    }
    default: {
      content = cardsWithText(type, props.header, props.description);
      break;
    }
  }

  return content;
}

export function OverflowMenu(props) {
  const classNames = {
    wrapper: 'card-menu-wrapper',
    cardMenu: 'card-menu',
  };

  switch (props.submenu) {
    case 'small':
      classNames.cardMenu += ' small';
      break;
    case 'full':
      classNames.wrapper += ' full';
      break;
    default:
      break;
  }

  const base = (
    <div className={classNames.cardMenu}>
      <div>Action 1</div>
      <div>Action 2</div>
      <div>Action 3</div>
      <div>Action 4</div>
    </div>
  );

  function addMenuWrapper(content, WrapperClassName) {
    return (
      <div className={WrapperClassName}>
        {content}
        <div className="separeted-link"><a>Separated link</a></div>
      </div>
    );
  }

  const content = props.submenu === 'small' ? base : addMenuWrapper(base, classNames.wrapper);

  return content;
}
