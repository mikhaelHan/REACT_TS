import React from 'react';

import './Main.scss';

const Main: React.FC<{ imageState: string[] }> = (props) => {
  return (
    <main>
      <div className="wrapper">
        <div className="main-container">
          {props.imageState.map<JSX.Element>((el: string, ind: number) => {
            return (
              <>
                <div className="main-container__box">
                  <img
                    className="main-container__image"
                    src={el}
                    alt={`${ind}`}
                    key={`${ind}`}
                  ></img>
                </div>
              </>
            );
          })}
          <section className="main-container__box-bottom"></section>
        </div>
      </div>
    </main>
  );
};

export default Main;
