import React from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { ContainerBox } from './components/ContainerBox/ContainerBox';
import { MafiasList } from './components/MafiasList/MafiasList';
import { TopThreeMafias } from './components/TopThreeMafias/TopThreeMafias';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <ContainerBox>
        <TopThreeMafias />
        <MafiasList />
        <Footer />
      </ContainerBox>
    </React.Fragment>
  );
};
