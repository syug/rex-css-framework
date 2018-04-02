import * as React from 'react';
import Label from '../atoms/labels';
import Rating from '../atoms/rating';

export function landscape(size, header, description) {
  const type = size ? ` ${size}` : '';
  return (
    <div className={`card${type}`}>
      <CardMedia>
        <img src="/img/bamboo.jpeg" alt="" />
      </CardMedia>
      <CardContent header={header} description={description}>
        <CardAction>
          <a className="button">Read more</a>
          <a className="button"><span className="circle">•••</span></a>
        </CardAction>
      </CardContent>
    </div>
  );
}

export function fullImage(header) {
  return (
    <div className="card image">
      <CardMedia overlayTitle={header} overlaySubtitle="Located in Kyoto, Japan">
        <img src="/img/bamboo.jpeg" alt="" />
      </CardMedia>
    </div>
  );
}

export function cardsWithText(type, header, description) {
  return (
    <div className={`card${type}`}>
      <CardContent header={header} description={description}>
        <CardAction>
          <a className="button">Learn more</a>
        </CardAction>
      </CardContent>
    </div>
  );
}

export function panel(header, price, currency) {
  return (
    <div className={'card panel'}>
      <CardMedia>
        <img src="/img/onsen.png" alt="" />
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
          <a className="button">•••</a>
        </CardAction>
      </CardContent>
    </div>
  );
}

export function CardAction(props) {
  return (
    <div className="extra contents">
      {props.children}
    </div>
  );
}

export function CardContent(props) {
  return (
    <div className="content">
      {props.header ? (
        <div className="header">
          {props.header}
        </div>) : null}
      {props.description ? (
        <div className="description">
          {props.description}
        </div>) : null}
      {props.children ? props.children : null}
    </div>
  );
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
  return (
    <div className={`${props.type ? props.type : null}`} >
      {props.children}
    </div>
  );
}

export default function Cards(props) {
  const type = props.type ? ` ${props.type}` : '';

  let content;
  if (props.type === 'size') {
    content = landscape(props.size, props.header, props.description);
  } else if (props.type === 'image') {
    content = fullImage(props.header);
  } else if (props.type === 'panel') {
    content = panel(props.header, props.price, props.currency);
  } else {
    content = cardsWithText(type, props.header, props.description);
  }

  return content;
}
