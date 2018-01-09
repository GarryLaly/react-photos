import { createStore, applyMiddleware } from 'redux'
import app from './reducers/index.js';

import createSagaMiddleware from 'redux-saga';
import dataSaga from './sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(dataSaga);
  return store;
}
