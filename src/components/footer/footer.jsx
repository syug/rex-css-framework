import * as React from 'react';
import { Pagination } from './pagination';
import logo from '../../assets/img/r-logo.svg';

const getCurrentYear = () => new Date().getFullYear().toString();

export function Footer(props) {
  const { footer: { previous, next }, localization } = props;
  const year = getCurrentYear();

  return (
    <footer>
      <Pagination previous={previous} next={next} localization={localization} />
      <div className="copyright">
        <div className="copyright-inner clearfix">
          <p className="extra-small">© {year} Rakuten COED Department</p>
          <div className="logo">
            <img src={logo} />
          </div>
        </div>
      </div>
    </footer>
  );
}
