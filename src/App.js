import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Loading from './components/Loading';

import { useLoading } from './hooks/Loading';

import Routes from './routes';

import Global from './styles/global';

function App() {
  const { isLoading } = useLoading();

  return (
    <>
      <BrowserRouter>
        <Routes />
        <Loading isLoading={isLoading} />
      </BrowserRouter>
      <Global />
    </>
  );
}

export default App;
