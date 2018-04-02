import * as React from 'react';
import Card from '../molecules/cards';
import { Button } from '../atoms/button';
import Tab from '../molecules/tabs';

export default function Carousels(props) {
  // const type = props.type ? ` ${props.type}` : '';

  const image = (
    <div className="carousel image">
      <div className="title">title</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <Card type="image" header="Sagano Bamboo Forest" />
        </div>
        <div className="carousel-item">
          <Card type="image" header="Sagano Bamboo Forest" />
        </div>
        <div className="carousel-item">
          <Card type="image" header="Sagano Bamboo Forest" />
        </div>
        <div className="carousel-item">
          <Card type="image" header="Sagano Bamboo Forest" />
        </div>
      </div>
      <span className="previous">
        <Button option="circle" size="" innerIcon="chevron-left" />
      </span>
      <span className="next">
        <Button option="circle" size="" innerIcon="chevron-right" />
      </span>
      <div className="indicator-group">
        <div className="indicator active" />
        <div className="indicator" />
        <div className="indicator" />
      </div>
    </div>
  );

  const card = (
    <div className="carousel card">
      <div className="title">title</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
          />
        </div>
      </div>
      <span className="previous">
        <Button option="circle" size="" innerIcon="chevron-left" />
      </span>
      <span className="next">
        <Button option="circle" size="" innerIcon="chevron-right" />
      </span>
      <div className="indicator-group">
        <div className="indicator active" />
        <div className="indicator" />
        <div className="indicator" />
      </div>
    </div>
  );

  const tabs = (
    <div className="carousel tab">

      <div className="title">title</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
      <Tab />
      <div className="carousel-inner">
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
          />
        </div>
      </div>
      <span className="previous">
        <Button option="circle" size="" innerIcon="chevron-left" />
      </span>
      <span className="next">
        <Button option="circle" size="" innerIcon="chevron-right" />
      </span>
      <div className="indicator-group">
        <div className="indicator active" />
        <div className="indicator" />
        <div className="indicator" />
      </div>
    </div>
  );

  const marketing = (
    <div className="carousel marketing">
      <div className="introduction">
        <div className="text">Featured article</div>
        <div className="title">Essential adventures in Western Europe.</div>
        <div className="buttons">
          <a className="button">See more</a>
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src="/img/landscape.png" alt="" />
        </div>
        <div className="carousel-item">
        </div>
        <div className="carousel-item">
        </div>
      </div>
      <span className="previous">
        <Button option="circle" size="" innerIcon="chevron-left" />
      </span>
      <span className="next">
        <Button option="circle" size="" innerIcon="chevron-right" />
      </span>
    </div>
  );


  let content;
  if (props.type === 'image') {
    content = image;
  } else if (props.type === 'card') {
    content = card;
  }
  //  else if (props.type === 'tab') {
  //   content = tabs;
  // }
   else {
    content = marketing;
  }
  return content;
}
