import React, { useState, useEffect } from 'react';

import '../assets/styles/nulstyle.scss';
import './App.scss';

import { IAPIrequest, IResults } from '../interfaces/interfaces';
import APIrequest from '../client_API/APIrequest';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

const App: React.FC = () => {
  const [state, setState] = useState<string>('car');
  const [imageState, setImageState] = useState<IResults[] | null>(null);

  const changeState = (currant: string): void => {
    setState(currant);
  };

  useEffect(() => {
    const getResults = async (word: string): Promise<IResults[] | null> => {
      const responce: IAPIrequest | null = await APIrequest(word);

      if (!responce || !responce.results) return null;

      return responce.results;
    };

    const addResults = async (word: string): Promise<void> => {
      const array: IResults[] | null = await getResults(word);
      setImageState(array);
    };

    addResults(state);
  }, [state]);

  return (
    <>
      <Header changeState={changeState} />
      <Main imageState={imageState} />
      <Footer />
    </>
  );
};

export default App;
