import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Normalize from './assets/styles/normalize';
import Header from './components/header';
import Routes from './routes';

/**
 * Single Page Application.
 * @returns {*}
 */
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Normalize />
      <Header />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
