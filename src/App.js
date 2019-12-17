import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
