import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { createStore } from 'redux';
import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render(
  <App store={store}/>,
  document.querySelector('#app')
);