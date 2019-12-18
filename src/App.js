import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import GlobalStyle from './styles/global';

import { store, persistor } from './store';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
