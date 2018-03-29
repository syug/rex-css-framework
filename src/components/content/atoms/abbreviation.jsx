import * as React from 'react';

export function Abbreviation(props) {
  const textBefore = props.textBefore;
  const attrMinified = props.attrMinified;
  const attrExtended = props.attrExtended;
  const textAfter = props.textAfter;
  return (
    <p>
      {textBefore} <abbr title={attrExtended}>{attrMinified}</abbr>{textAfter}
    </p>
  );
}
