import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './Components/App';
import Reducer from './Reducers';
import './CSS/App.css';

const store = createStore(Reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,
  document.getElementById('root')
);
