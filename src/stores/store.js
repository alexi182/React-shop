import  thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducers from '../reducers/cart';

const middleWare = applyMiddleware(promise(), thunk, logger);

const reducer = combineReducers({
   cart: cartReducers
});

const store = createStore(reducer, middleWare);

export default store;