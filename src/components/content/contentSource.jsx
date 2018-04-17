import * as React from 'react';

// content
import { ContentHeader } from './contentHeader';
import { Section } from './section';
import { Column } from './column';

// atoms
import { Button } from './atoms/button';
import { ContextualText, ContextualBackground } from './atoms/contextual-color';
import { Download } from './atoms/download';
import InputGroup from './atoms/input-group';
import { LabelAndCheckbox } from './atoms/label-and-checkbox';
import { Select } from './atoms/select';
import TextArea from './atoms/text-area';
import { Icon } from './atoms/icon';
import { Image } from './atoms/image';
import { Table } from './atoms/table';
import { Abbreviation } from './atoms/abbreviation';
import { Address } from './atoms/address';
import { Alignment } from './atoms/alignment';
import { Blockquote } from './atoms/blockquote';
import { Description } from './atoms/description';
import { Heading } from './atoms/heading';
import { Text, Link, TextWithLink, TextWithEmail } from './atoms/text';
import { Mark, Delete, Strikethrough, Insert, Underline, Small, Bold, Italics } from './atoms/inline';
import { List } from './atoms/list';
import { Span } from './atoms/span';
import { Transformation } from './atoms/transformation';
import Tags from './atoms/tags';
import Labels from './atoms/labels';
import Rating from './atoms/rating';
import Checkbox from './atoms/checkbox';
import RadioButton from './atoms/radioButton';
import Switch from './atoms/switch';
import Stepper from './atoms/stepper';
import Slider from './atoms/slider';
import Tooltips from './atoms/tooltips';

// molecules
import { Track } from './molecules/Track/Track';
import LanguageSwitcher from './molecules/LanguageSwitcher/languageSwitcher';
import LanguageSwitcherModal from './molecules/LanguageSwitcher/languageSwitcherModal';
import SearchBar from './molecules/SearchBar/searchBar';
import SearchSuggestions from './molecules/SearchBar/searchSuggestions';
import Alerts from './molecules/alerts';
import Pagination from './molecules/pagination';
import Breadcrumbs from './molecules/breadcrumbs';
import Tabs from './molecules/tabs';
import Cards from './molecules/cards';
import Dropdowns from './molecules/dropdowns';
import Badges from './molecules/badges';
import Cards from './molecules/cards';

// organisms
import Carousels from './organisms/carousels';

// site
import { IconPicker } from './site/IconPicker';
import { BrandColor } from './site/brandColor';
import { Swatch } from './site/swatch';
import { WorkingExample } from './site/workingExample';

const Assets = require.context('assets/img', false);


// this can props be a loop based of imported compnents
export function ComponentSelector(data, tabTarget, lang, key) {
  switch (data.component) {
    case 'Carousels':
      return (
        <Carousels title={data.title} type={data.type} key={key} />
      );

    case 'Cards':
      return (
        <Cards type={data.type} header={data.header} price={data.price} currency={data.currency} description={data.description} size={data.size} />
      );

    case 'Slider':
      return (
        <Slider disabled={data.disabled} type={data.type} icon={data.icon} iconType={data.iconType} key={key} />
      );

    case 'Stepper':
      return (
        <Stepper disabled={data.disabled} selectedRight={data.selectedRight} selectedLeft={data.selectedLeft} rightIcon={data.rightIcon} leftIcon={data.leftIcon} key={key} />
      );

    case 'Switch':
      return (
        <Switch type={data.type} key={key} />
      );

    case 'RadioButton':
      return (
        <RadioButton text={data.text} name={data.name} label={data.label} status={data.status} key={key} />
      );

    case 'Checkbox':
      return (
        <Checkbox text={data.text} type={data.type} key={key} />
      );

    case 'Tooltips':
      return (
        <Tooltips text={data.text} size={data.size} styles={data.styles} key={key} />
      );

    case 'Dropdowns':
      return (
        <Dropdowns text={data.text} type={data.type} subtype={data.subtype} splitButton={data.splitButton} key={key} />
      );

    case 'Badges':
      return (
        <Badges text={data.text} type={data.type} icon={data.icon} iconType={data.iconType} linkLabel={data.linkLabel} key={key} />
      );

    case 'Alerts':
      return (
        <Alerts text={data.text} htmlText={data.htmlText ? data.htmlText[lang] : null} type={data.type} icon={data.icon} iconType={data.iconType} omitClose={data.omitClose} key={key} />
      );

    case 'Cards':
      return (
        <Cards type={data.type} header={data.header} price={data.price} currency={data.currency} description={data.description} size={data.size} image={data.image} submenu={data.submenu} border={data.border} />
      );

    case 'Pagination':
      return (
        <Pagination type={data.type} subtype={data.subtype} withText={data.withText} prevText={data.prevText} nextText={data.nextText} activeNo={data.activeNo} total={data.total} key={key} />
      );

    case 'Breadcrumbs':
      return (
        <Breadcrumbs text={data.text} key={key} />
      );

    case 'Tabs':
      return (
        <Tabs type={data.type} subType={data.subType} key={key} />
      );

    case 'Labels':
      return (
        <Labels text={data.text} subtext={data.subtext} type={data.type} subtype={data.subtype} size={data.size} key={key} />
      );

    case 'Rating':
      return (
        <Rating text={data.text} type={data.type} icon={data.icon} key={key} />
      );

    case 'Tags':
      return (
        <Tags text={data.text} type={data.type} icon={data.icon} key={key} />
      );

    case 'SearchSuggestions':
      return (
        <SearchSuggestions type={data.type} text={data.text[lang]} key={key} />
      );

    case 'SearchBar':
      return (
        <SearchBar type={data.type} key={key} />
      );

    case 'LanguageSwitcherModal':
      return (
        <LanguageSwitcherModal text={data.text[lang]} key={key} />
      );

    case 'LanguageSwitcher':
      return (
        <LanguageSwitcher text={data.text[lang]} key={key} />
      );

    case 'Swatch':
      return (
        <Swatch color={data.color} variable={data.variable} className={data.className} key={key} />
      );

    case 'BrandColor':
      return (
        <BrandColor color={data.color} variable={data.variable} key={key} />
      );

    case 'Column':
      return (
        <Column info={data} cols={data.cols} tabTarget={tabTarget} type={data.type} lang={lang} className={data.className} key={key} />
      );

    case 'Track':
      return (
        <Track steps={data.steps} mobile={data.mobile} lang={lang} />
      );

    case 'Section':
      return (
        <Section info={data} tabTarget={tabTarget} type={data.type} className={data.className} lang={lang} key={key} />
      );

    case 'IconPicker':

      return (
        <IconPicker icons={data.icons} type={data.type} className={data.className} lang={lang} key={key} />
      );

    case 'TwoColumns':

      return (
        <TwoColumns info={data} tabTarget={tabTarget} type={data.type} lang={lang} key={key} />
      );

    case 'ContentHeader':

      return (
        <ContentHeader info={data} tabTarget={tabTarget} lang={lang} key={key} />
      );

    case 'WorkingExample':

      return (
        <WorkingExample info={data} tabTarget={tabTarget} lang={lang} key={key} />
      );

    case 'Heading':

      if (typeof data.secondary === 'undefined') {
        data.secondary = {}; // eslint-disable-line no-param-reassign
      }

      return (
        <Heading type={data.type} text={data.text[lang]} secondary={data.secondary[lang]} key={key} />
      );

    case 'Text':

      return (
        <Text type={data.type} text={data.text[lang]} key={key} />
      );

    case 'Link':

      return (
        <Link url={data.url} text={data.text[lang]} key={key} />
      );

    case 'TextWithLink':

      return (
        <TextWithLink url={data.url} text={data.text[lang]} lang={lang} linkedText={data.linkedText[lang]} key={key} />
      );

    case 'TextWithEmail':

      return (
        <TextWithEmail text={data.text[lang]} address={data.address} key={key} />
      );

    case 'Span':

      return (
        <Span text={data.text[lang]} key={key} />
      );

    case 'List':

      return (
        <List type={data.type} list={data.list[lang]} currentLang={lang} icon={data.icon} iconType={data.iconType} defaultActive={data.defaultActive} key={key} />
      );

    case 'Description':

      return (
        <Description type={data.type} title={data.title[lang]} text={data.text[lang]} key={key} />
      );

    case 'Image': {
      let src = null;
      // allows for the img src attribute to be either a string (for both languages)
      // or an object with values specified by language keys
      if (typeof data.src === 'object' && (lang === 'en' || lang === 'jp')) {
        src = Assets(`./${data.src[lang]}`);
      } else {
        src = Assets(`./${data.src}`);
      }

      return (
        <Image responsive={data.responsive} src={src} lang={lang} type={data.type} option={data.option} key={key} className={data.className} />
      );
    }

    case 'Mark':

      return (
        <Mark text={data.text[lang]} key={key} />
      );

    case 'Delete':

      return (
        <Delete text={data.text[lang]} key={key} />
      );

    case 'Strikethrough':

      return (
        <Strikethrough text={data.text[lang]} key={key} />
      );

    case 'Insert':

      return (
        <Insert text={data.text[lang]} key={key} />
      );

    case 'Underline':

      return (
        <Underline text={data.text[lang]} key={key} />
      );

    case 'Small':

      return (
        <Small text={data.text[lang]} key={key} />
      );

    case 'Bold':

      return (
        <Bold text={data.text[lang]} key={key} />
      );

    case 'Italics':

      return (
        <Italics text={data.text[lang]} key={key} />
      );

    case 'Alignment':

      return (
        <Alignment text={data.text[lang]} type={data.type} key={key} />
      );

    case 'Transformation':

      return (
        <Transformation text={data.text[lang]} type={data.type} key={key} />
      );

    case 'Abbreviation':

      return (
        <Abbreviation textBefore={data.textBefore[lang]} attrMinified={data.attrMinified[lang]} attrExtended={data.attrExtended[lang]} textAfter={data.textAfter[lang]} type={data.type} key={key} />
      );

    case 'Address':

      return (
        <Address title={data.title[lang]} address={data.address[lang]} email={data.email} key={key} />
      );

    case 'Blockquote':

      return (
        <Blockquote quote={data.quote[lang]} author={data.author[lang]} key={key} />
      );

    case 'Table':

      return (
        <Table headings={data.headings[lang]} rows={data.rows[lang]} type={data.type} key={key} />
      );

    case 'InputGroup':

      return (
        <InputGroup type={data.type} state={data.state} validation={data.validation} lang={lang} option={data.option} helperText={data.helperText[lang]} placeHolder={data.placeHolder[lang]} label={data.label[lang]} key={key} />
      );

    case 'LabelAndCheckbox':

      return (
        <LabelAndCheckbox type={data.type} name={data.name} labels={data.labels[lang]} key={key} />
      );

    case 'Select':

      return (
        <Select type={data.type} name={data.name} options={data.options[lang]} state={data.state} key={key} />
      );

    case 'TextArea':

      return (
        <TextArea type={data.type} stateText={data.stateText} helperText={data.helperText[lang]} placeHolder={data.placeHolder[lang]} label={data.label[lang]} state={data.state} key={key} />
      );

    case 'Button':

      return (
        <Button text={data.text[lang]} type={data.type} size={data.size} optionalState={data.optionalState} option={data.option} innerIcon={data.innerIcon} disabled={data.disabled} icon={data.icon} iconPositionLeft={data.iconPositionLeft} key={key} />
      );

    case 'Icon':

      return (
        <Icon type={data.type} name={data.name} small={data.small} key={key} />
      );

    case 'Download':

      return (
        <Download name={data.name} url={data.url} date={data.date} type={data.type} className={data.className} icon={data.icon} size={data.size} key={key} />
      );

    case 'ContextualText':

      return (
        <ContextualText context={data.context} text={data.text[lang]} key={key} />
      );

    case 'ContextualBackground':

      return (
        <ContextualBackground context={data.context} text={data.text[lang]} key={key} />
      );

    case 'Do':

      return (
        <Do src={data.src} text={data.text[lang]} key={key} />
      );

    case 'Dont':

      return (
        <Dont src={data.src} text={data.text[lang]} key={key} />
      );


    default:

      return (
        <div className="text-danger" key={key}>Error, the <strong>{data.component}</strong> {"component doesn't exist"}</div>
      );
  }
}

export function getContentSource(contentSource, tabTarget, lang) {
  return contentSource.map((data, key) => ComponentSelector(data, tabTarget, lang, key));
}
