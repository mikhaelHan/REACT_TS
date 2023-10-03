import React from 'react';

import gitHubIcon from '../../assets/images/github.png';
import rsSchoolIcon from '../../assets/images/rs_school_js.svg';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="foot-container">
          <section className="footer-left">
            <a
              className="footer-left__link"
              href="https://github.com/mikhaelHan?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-left__icon" src={gitHubIcon} alt="GitHub" />
              My GitHub
            </a>
          </section>
          <section className="footer-right">
            <a
              className="footer-right__link"
              href="https://app.rs.school"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-right__icon" src={rsSchoolIcon} alt="RS School" />
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
