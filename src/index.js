import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import LoadingProvider from './hooks/Loading';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
