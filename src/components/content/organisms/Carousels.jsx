import * as React from 'react';
import Card from '../molecules/cards';
import { Button } from '../atoms/button';
import Tab from '../molecules/tabs';
import { Routes } from '../../../domain/middleware/routes';
import { Icon } from '../atoms/icon';

export function Previous(props) {
  const option = props.option ? props.option : '';
  const size = props.size ? props.size : '';
  const innerIcon = props.innerIcon ? props.innerIcon : '';

  return (
    <span className="previous">
      <Button option={option} size={size} innerIcon={innerIcon} />
    </span>
  );
}

export function Next(props) {
  const option = props.option ? props.option : '';
  const size = props.size ? props.size : '';
  const innerIcon = props.innerIcon ? props.innerIcon : '';

  return (
    <span className="next">
      <Button option={option} size={size} innerIcon={innerIcon} />
    </span>
  );
}

export function CarouselItem(props) {
  const active = props.active ? 'active' : '';
  const selected = props.selected ? 'selected' : '';
  const classes = props.type ? props.type : '';
  return (
    <div className={`carousel-item ${active} ${selected} ${classes}`}>
      {props.children}
    </div>
  );
}

export function Indicator(props) {
  const active = props.active;
  const amount = props.amount;
  let content = [];
  for(let i = 0; i < amount; i++) {
    let type;
    if (active === i + 1) {
      type = 'active';
    }
    content.push(<div className={`indicator ${type}`} key={i} />);
  }

  return (
    <div className="indicator-group">
      {content}
    </div>
  );
}

export function image() {
  return (
    <div className="carousel-inner">
      <CarouselItem>
        <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
      </CarouselItem>
      <CarouselItem>
        <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
      </CarouselItem>
      <CarouselItem>
        <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
      </CarouselItem>
      <CarouselItem>
        <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
      </CarouselItem>
      <CarouselItem>
        <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
      </CarouselItem>
    </div>
  );
}

export function card() {
  return (
    <div className="carousel-inner">
      <CarouselItem>
        <Card
          type="size"
          size="landscape"
          description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
          header="Sagano Bamboo Forest"
          image="img/bamboo.jpeg"
        />
      </CarouselItem>
      <CarouselItem>
        <Card
          type="size"
          size="landscape"
          description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
          header="Sagano Bamboo Forest"
          image="img/bamboo.jpeg"
        />
      </CarouselItem>
      <CarouselItem>
        <Card
          type="size"
          size="landscape"
          description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
          header="Sagano Bamboo Forest"
          image="img/bamboo.jpeg"
        />
      </CarouselItem>
      <CarouselItem>
        <Card
          type="size"
          size="landscape"
          description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
          header="Sagano Bamboo Forest"
          image="img/bamboo.jpeg"
        />
      </CarouselItem>
    </div>
  );
}

export function base(type, condition) {
  let inner;
  switch (type) {
    case 'image':
      inner = image();
      break;
    case 'card':
      inner = card();
      break;
    case 'tabs':
      inner = card();
      break;
  };

  const typeName = type === 'tabs' ? 'carousel-tab' : type;
  const tab = type === 'tabs' ? <Tab type="border-top"/> : null;

  return (
    <div className={`carousel ${typeName}`}>
      <div className="title">{condition.title}</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
      {tab}
      {inner}
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-right" />
      <Indicator active={1} amount={3}/>
    </div>
  );
}

export function marketingThumbnailsBottom(withCaption) {
  const caption = withCaption ? <div className="caption">Title/Caption</div> : null;
  return (
    <div className="carousel-thumbnails bottom">
      <CarouselItem selected>
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
        {caption}
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
        {caption}
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing3.png`} alt="" />
        {caption}
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
        {caption}
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
        {caption}
      </CarouselItem>
    </div>
  );
}

export function marketingThumbnailsFloat() {
  return (
    <div className="carousel-thumbnails float">
      <CarouselItem selected>
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing3.png`} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
      </CarouselItem>
    </div>
  );
}

export function marketingBase(type, condition) {
  let classes = 'carousel marketing';
  let thumbnails;
  let prev;
  let next;
  switch(type) {
    case 'bottom':
      thumbnails = marketingThumbnailsBottom(true);
      classes = `${classes} thumbnail-${type}`;
      break;
    case 'wide':
      thumbnails = marketingThumbnailsBottom(true);
      classes = `${classes} thumbnail-${type}`;
      break;
    case 'float':
      thumbnails = marketingThumbnailsFloat();
      classes = `${classes} thumbnail-${type}`;
      break;
    case 'tab':
      thumbnails = null;
      classes = `${classes} marketing-${type}`;
      break;
  }

  const tab = type === 'tab' ? (
    <div className="carousel-tab">
      <Tab type="border-top"/>
    </div>
  ) : null;

  const activeItem = carouselActiveItem(type);

  return (
    <div className={classes}>
      <div className="introduction">
        <div className="title">{condition.title}</div>
        <div className="caption">{condition.caption}</div>
        <LabelWithIcon label={condition.more} icon="chevron-right" className="more"></LabelWithIcon>
      </div>
      {activeItem}
      {thumbnails}
      {tab}
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-right" />
    </div>
  );
}

export function carouselActiveItem(type) {
  const content = type === 'wide' ? (
    <div className="carousel-main-items">
      <CarouselItem type="prev-item">
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
      <CarouselItem active>
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
      <CarouselItem type="next-item">
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
    </div>
  ) : (
    <CarouselItem active>
      <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
    </CarouselItem>
  );

  return content;
}

export function thumbnailCarousel() {
  const withCaption = false;
  return (
    <div className="carousel thumbnail">
      <CarouselItem active>
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
      {marketingThumbnailsBottom(withCaption)}
    </div>
  );

}

export default function Carousels(props) {
  const condition = {
    title: props.title || '',
    caption: props.caption || '',
    more: props.more || '',
  }

  let content;
  switch(props.type) {
    case 'image':
      content = base(props.type, condition);
      break;
    case 'card':
      content = base(props.type, condition);
      break;
    case 'tabs':
      content = base(props.type, condition);
      break;
    case 'marketing':
      content = marketingBase('bottom', condition);
      break;
    case 'marketing float':
      content = marketingBase('float', condition);
      break;
    case 'marketing tab':
      content = marketingBase('tab', condition);
      break;
    case 'marketing wide':
      content = marketingBase('wide', condition);
      break;
    case 'thumbnail':
      content = thumbnailCarousel();
      break;
  }

  return content;
}

export function LabelWithIcon(props) {
  return (
    <div className="button-area">
      <a className={props.className}>{props.label}</a>
      <Icon name={props.icon} />
    </div>
  );
}