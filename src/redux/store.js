import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index.reducer';
import rootSaga from './sagas/index.saga';

const sagaMiddleware = createSagaMiddleware();

// setting up redux DevTools extension when creating the store
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export default function getStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}