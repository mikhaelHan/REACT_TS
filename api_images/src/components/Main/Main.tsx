import React from 'react';

import './Main.scss';
import { IResults } from '../../interfaces/interfaces';

const Main: React.FC<{ imageState: IResults[] | null }> = (props) => {
  return (
    <main>
      <div className="wrapper">
        <div className="main-container">
          {props.imageState ? (
            props.imageState.map<JSX.Element>((el: IResults) => {
              return !el.urls.regular || !el.alt_description || !el.id ? (
                <></>
              ) : (
                <>
                  <div className="main-container__box">
                    <img
                      className="main-container__image"
                      src={el.urls.regular}
                      alt={`${el.alt_description}`}
                      key={`${el.id}`}
                    ></img>
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}
          <section className="main-container__box-bottom"></section>
        </div>
      </div>
    </main>
  );
};

export default Main;
