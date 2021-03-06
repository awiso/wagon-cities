import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// render an instance of the component in the DOM
const root = document.getElementById('root')
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  root
);