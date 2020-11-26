import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Global from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
}

export default App;
