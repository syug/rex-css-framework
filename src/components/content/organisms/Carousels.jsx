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
  return (
    <div className={`carousel-item ${active} ${selected}`}>
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

export function base(type) {
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
      <div className="title">title</div>
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

export function marketingThumbnailsBottom() {
  return (
    <div className="carousel-thumbnails bottom">
      <CarouselItem selected>
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
        <div className="caption">Title/Caption</div>
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
        <div className="caption">Title/Caption</div>
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing3.png`} alt="" />
        <div className="caption">Title/Caption</div>
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
        <div className="caption">Title/Caption</div>
      </CarouselItem>
      <CarouselItem>
        <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
        <div className="caption">Title/Caption</div>
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

export function marketingBase(type) {
  let thumbnails;

  switch(type) {
    case 'bottom':
      thumbnails = marketingThumbnailsBottom();
      break;
    case 'float':
      thumbnails = marketingThumbnailsFloat();
      break;
    case 'tab':
      thumbnails = null;
      break;
  }

  const tab = type === 'tab' ? (
    <div className="carousel-tab">
      <Tab type="border-top"/>
    </div>
  ) : null;

  return (
    <div className="carousel marketing">
      <div className="introduction">
        <div className="text">Featured article</div>
        <div className="title">Essential adventures in Western Europe.</div>
        <LabelWithIcon label="Read more" icon="chevron-right" className="more"></LabelWithIcon>
      </div>
      <CarouselItem active>
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
      {thumbnails}
      {tab}
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-right" />
    </div>
  );
}

export default function Carousels(props) {
  let content;
  switch(props.type) {
    case 'image':
      content = base(props.type);
      break;
    case 'card':
      content = base(props.type);
      break;
    case 'tabs':
      content = base(props.type);
      break;
    case 'marketing':
      content = marketingBase('bottom');
      break;
    case 'marketing float':
      content = marketingBase('float');
      break;
    case 'marketing tab':
      content = marketingBase('tab');
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