import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import Routes from './routes';

console.tron.log('hello world');

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
