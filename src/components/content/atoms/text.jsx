import * as React from 'react';

export function Text(props) {
  const text = props.text;
  const type = props.type;

  let textExample = null;

  switch (type) {
    case 'lead':
      textExample = <p className="lead">{text}</p>;
      break;
    case 'large':
      textExample = <p className="large">{text}</p>;
      break;
    case 'small':
      textExample = <p className="small">{text}</p>;
      break;
    case 'extra-small':
      textExample = <p className="extra-small">{text}</p>;
      break;
    default:
      textExample = <p>{text}</p>;
      break;
  }

  return textExample;
}

export function TextWithLink(props) {
  const text = props.text;
  const linkedText = props.linkedText;
  const url = props.url;
  const lang = props.lang;
  switch (lang) {
    case 'jp':
        return (
          <p>{text}<a href={url} target="_blank">{linkedText}</a></p>
        );
      break;
  
    default:
      return (
        <p>{text}<a href={url} target="_blank">{linkedText}</a>.</p>
      );
  }
  
}

export function TextWithEmail(props) {
  const text = props.text;
  const address = props.address;

  return (
    <p>{text}<a href={`mailto:${address}`}>{address}</a></p>
  );
}


export function Link(props) {
  const text = props.text;
  const url = props.url;

  return (
    <a href={url}>
      {text}
    </a>
  );
}