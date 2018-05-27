import { createStore, applyMiddleware } from 'redux';
import createThunkMiddleware from '../middleware/thunk';
import reducers from '../reducers';

const thunk = createThunkMiddleware();

const createStoreWithMiddleware = applyMiddleware(thunk)(
  createStore,
);

const initState = {};

const store = createStoreWithMiddleware(
  reducers,
  initState,
);

export default store;
