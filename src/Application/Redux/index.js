import { combineReducers } from 'redux';
import errors from './Reducers/errors';
import orders from './Reducers/orders';
import products from './Reducers/products';
import forms from './Reducers/forms';

let combinedReducers = combineReducers({ errors, orders, products, forms });

export default combinedReducers;
