import {combineReducers} from 'redux';

import {default as pizza} from './pizzas';
import {default as filter} from './filters';
import {default as cart} from './cart';

import {TInitialState, TInitialStateFilters, TInitialStateCart} from "../../types/redux";


export type hookUseSelector = {
    pizza: TInitialState,
    filter: TInitialStateFilters,
    cart: TInitialStateCart
};

export default combineReducers<hookUseSelector>({
    filter, pizza, cart,
})