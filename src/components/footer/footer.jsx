import * as React from 'react';
import { Pagination } from './pagination';

const getCurrentYear = () => new Date().getFullYear().toString();

export function Footer(props) {
  const { footer: { previous, next }, localization } = props;
  const year = getCurrentYear();

  return (
    <footer>
      <Pagination previous={previous} next={next} localization={localization} />
      <div className="copyright">
        <div className="copyright-inner">
          <p className="extra-small">© {year} Rakuten COED Department</p>
        </div>
      </div>
    </footer>
  );
}
