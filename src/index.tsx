import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import DiscountApp from './components/DiscountApp';

ReactDOM.render(
  <Provider store={store}>
    <DiscountApp />
  </Provider>,
  document.getElementById('root')
);
