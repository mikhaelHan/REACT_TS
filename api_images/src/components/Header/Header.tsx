import React, { useState } from 'react';

import './Header.scss';

import logo from '../../assets/images/logo.svg';

const Header: React.FC<{ changeState: (currant: string) => void }> = (props) => {
  const [inputState, setInputState] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
      props.changeState(inputState);
      e.target.value = '';
    }
  };

  return (
    <header>
      <div className="wrapper">
        <div className="head-container">
          <section className="head-container__left">
            <img src={logo} className="head-container__image" alt="logo" />
            <h1 className="head-container__title">Unsplash API</h1>
          </section>
          <section className="head-container__right">
            <input
              placeholder="Search..."
              className="head-container__input"
              type="search"
              onChange={(e) => setInputState(e.target.value)}
              onKeyDown={handleSearch}
            />
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
