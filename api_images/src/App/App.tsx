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
  const [imageState, setImageState] = useState<string[]>(['']);

  const changeState = (currant: string): void => {
    setState(currant);
  };

  useEffect(() => {
    const getUrls = async (word: string): Promise<string[]> => {
      const responce: IAPIrequest | null = await APIrequest(word);

      if (!responce || !responce.results) return [''];

      return responce.results.map((el: IResults) => (el.urls.regular ? el.urls.regular : ''));
    };

    const addUrls = async (word: string): Promise<void> => {
      const urls = await getUrls(word);
      setImageState(urls);
    };

    addUrls(state);
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
