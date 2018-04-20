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

export default function Carousels(props) {
  const image = (
    <div className="carousel image">
      <div className="title">title</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
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
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-left" />
      <Indicator active={1} amount={3}/>
    </div>
  );

  const card = (
    <div className="carousel card">
      <div className="title">title</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
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
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-left" />
      <Indicator active={1} amount={3}/>
    </div>
  );

  const tabs = (
    <div className="carousel carousel-tab">
      <div className="title">title</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
      <Tab type="border-top"/>
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
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-left" />
      <Indicator active={1} amount={3}/>
    </div>
  );

  const marketing = (
    <div className="carousel marketing">
      <div className="introduction">
        <div className="text">Featured article</div>
        <div className="title">Essential adventures in Western Europe.</div>
        <LabelWithIcon label="Read more" icon="chevron-right" className="more"></LabelWithIcon>
      </div>

      <CarouselItem active>
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
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
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-left" />
    </div>
  );

  const marketingThumbnailsFloat = (
    <div className="carousel marketing">
      <div className="introduction">
        <div className="text">Featured article</div>
        <div className="title">Essential adventures in Western Europe.</div>
        <LabelWithIcon label="Read more" icon="chevron-right" className="more"></LabelWithIcon>
      </div>
      <CarouselItem active>
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </CarouselItem>
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
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-left" />
    </div>
  );

  const marketingTab = (
    <div className="carousel marketing">
      <div className="introduction">
        <div className="text">Featured article</div>
        <div className="title">Essential adventures in Western Europe.</div>
        <LabelWithIcon label="Read more" icon="chevron-right" className="more"></LabelWithIcon>
      </div>
      <div className="carousel-item active">
        <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
      </div>
      <div className="carousel-tab">
        <Tab type="border-top"/>
      </div>
      <Previous option="circle" size="" innerIcon="chevron-left" />
      <Next option="circle" size="" innerIcon="chevron-left" />
    </div>
  );

  let content;
  if (props.type === 'image') {
    content = image;
  } else if (props.type === 'card') {
    content = card;
  } else if (props.type === 'tab') {
    content = tabs;
  } else if (props.type === 'marketing') {
    content = marketing;
  } else if (props.type === 'marketing float') {
    content = marketingThumbnailsFloat;
  } else if (props.type === 'marketing tab') {
    content = marketingTab;
  } else { content = ''}
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