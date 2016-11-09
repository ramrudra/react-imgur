'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import Gallery from './containers/Gallery';
import reducers from './reducers';

const composeStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

render(
  <Provider store={composeStoreWithMiddleware(reducers,  window.devToolsExtension ? window.devToolsExtension() : f => f)}>
    <Gallery />
  </Provider>
  , document.getElementById('js-main'));
