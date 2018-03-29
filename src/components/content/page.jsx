import * as React from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Content } from '../content/content';

export function Page(props) {
  const tabs = props.tabs;
  const footer = props.footer;
  const colorSelect = props.colorSelect;
  const localization = props.localization;
  const contentSource = props.contentSource;
  return (
    <section id="page">
      <Header colorSelect={colorSelect} search={props.search} localization={localization}/>
      <Content tabs={tabs} contentSource={contentSource} localization={localization}/>
      <Footer footer={footer} localization={localization}/>
    </section>
  );
}
