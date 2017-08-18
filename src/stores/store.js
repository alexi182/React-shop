import  thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducers from '../reducers/cart';
import compareReducers from '../reducers/compare';
import productReducers from '../reducers/product';

const middleWare = applyMiddleware(promise(), thunk, logger);

const reducer = combineReducers({
   cart: cartReducers,
   compare: compareReducers,
   product: productReducers
});

const store = createStore(reducer, middleWare);

export default store;
