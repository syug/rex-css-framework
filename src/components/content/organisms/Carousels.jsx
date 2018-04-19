import * as React from 'react';
import Card from '../molecules/cards';
import { Button } from '../atoms/button';
import Tab from '../molecules/tabs';
import { Routes } from '../../../domain/middleware/routes';
import { Icon } from '../atoms/icon';


export default function Carousels(props) {
  const image = (
    <div className="carousel image">
      <div className="title">title</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
        </div>
        <div className="carousel-item">
          <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
        </div>
        <div className="carousel-item">
          <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
        </div>
        <div className="carousel-item">
          <Card type="image" header="Sagano Bamboo Forest" image="img/bamboo.jpeg" />
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
            image="img/bamboo.jpeg"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
            image="img/bamboo.jpeg"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
            image="img/bamboo.jpeg"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
            image="img/bamboo.jpeg"
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
    <div className="carousel carousel-tab">
      <div className="title">title</div>
      <div className="buttons">
        <a className="button">See more</a>
      </div>
      <Tab type="border-top"/>
      <div className="carousel-inner">
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
            image="img/bamboo.jpeg"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
            image="img/bamboo.jpeg"
          />
        </div>
        <div className="carousel-item">
          <Card
            type="size"
            size="landscape"
            description="According to travelers, the Kyoto Sagano Bamboo forest is one of world's most beautiful groves."
            header="Sagano Bamboo Forest"
            image="img/bamboo.jpeg"
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
          <LabelWithIcon label="Read more" icon="chevron-right" className="more"></LabelWithIcon>
        </div>

        <div className="carousel-item active">
          <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
        </div>
        <div className="carousel-thumbnails bottom">
          <div className="carousel-item selected">
            <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
            <div className="caption">Title/Caption</div>
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
            <div className="caption">Title/Caption</div>
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing3.png`} alt="" />
            <div className="caption">Title/Caption</div>
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
            <div className="caption">Title/Caption</div>
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
            <div className="caption">Title/Caption</div>
          </div>

        </div>
      {/* </div> */}
      <span className="previous">
        <Button option="circle" size="" innerIcon="chevron-left" />
      </span>
      <span className="next">
        <Button option="circle" size="" innerIcon="chevron-right" />
      </span>
    </div>
  );

  const marketingThumbnailsFloat = (
    <div className="carousel marketing">
        <div className="introduction">
          <div className="text">Featured article</div>
          <div className="title">Essential adventures in Western Europe.</div>
          <LabelWithIcon label="Read more" icon="chevron-right" className="more"></LabelWithIcon>
        </div>
        <div className="carousel-item active">
          <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
        </div>
        <div className="carousel-thumbnails float">
          <div className="carousel-item selected">
            <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing3.png`} alt="" />
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing1.png`} alt="" />
          </div>
          <div className="carousel-item">
            <img src={`${Routes.SITE_ROOT}img/marketing2.png`} alt="" />
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
      <span className="previous">
        <Button option="circle" size="" innerIcon="chevron-left" />
      </span>
      <span className="next">
        <Button option="circle" size="" innerIcon="chevron-right" />
      </span>
    </div>
  );


  // const marketing = (
  //   <div className="carousel marketing">
  //     <div className="introduction">
  //       <div className="text">Featured article</div>
  //       <div className="title">Essential adventures in Western Europe.</div>
  //       <div className="buttons">
  //         <a className="button">See more</a>
  //       </div>
  //     </div>
  //     <div className="carousel-inner">
  //       <div className="carousel-item">
  //         <img src={`${Routes.SITE_ROOT}img/landscape.png`} alt="" />
  //       </div>
  //       <div className="carousel-item">
  //       </div>
  //       <div className="carousel-item">
  //       </div>
  //     </div>
  //     <span className="previous">
  //       <Button option="circle" size="" innerIcon="chevron-left" />
  //     </span>
  //     <span className="next">
  //       <Button option="circle" size="" innerIcon="chevron-right" />
  //     </span>
  //   </div>
  // );


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