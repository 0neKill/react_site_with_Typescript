import {all} from 'redux-saga/effects';
import {watcherPizzas} from './pizzas';


export function* rootWatcher() {
    yield all([watcherPizzas()])
}