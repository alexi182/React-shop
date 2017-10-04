import  thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducers from '../reducers/cart';
import compareReducers from '../reducers/compare';
import productsReducers from '../reducers/products';
import productReducers from '../reducers/product';
import filterReducers from '../reducers/filter';

const middleWare = applyMiddleware(promise(), thunk, logger);

const reducer = combineReducers({
   cart: cartReducers,
   compare: compareReducers,
   products: productsReducers,
   product: productReducers,
   filter: filterReducers
});

const store = createStore(reducer, middleWare);

export default store;
