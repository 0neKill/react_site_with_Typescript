import {takeEvery, put, call, select} from 'redux-saga/effects';
import axios from 'axios';


import {actionsPizzas} from '../actions';

//Types
import {hookUseSelector} from "../reducers";
import {IPizzaData} from "../../types/interfaces";
import {FilterAction} from "../../types/redux";
import {PizzaAction} from '../types/pizza';
import {Filters} from '../types/filters';

const http = async <T>(request: string): Promise<T> => {
    try {
        const {data} = await axios.get<T>(request);
        return data;
    } catch (e) {
        return e
    }
}

// function* workerAddPizzas() {
//     try {
//         yield put(actionsPizzas.actionSetLoading(true));
//         const data = yield call(() => http<IPizzaData[]>('/pizzas'));
//         yield put(actionsPizzas.actionAddPizzas(data));
//         yield put(actionsPizzas.actionSetLoading(false));
//     } catch (e) {
//         return e;
//     }
// }

function* workerAddPizzasBySort({payload}: FilterAction) {
    try {
        yield put(actionsPizzas.actionSetLoading(true));
        const data = yield select(((state: hookUseSelector) => state.filter));
        const response = yield call(() => http<IPizzaData[]>(`/pizzas?${data.category !== null ? `category=${data.category}` : ''}&_sort=${data.sortBy}&_order=${
            data.sortBy === 'name' ? 'asc' : 'desc'
        }`));
        yield put(actionsPizzas.actionAddPizzas(response));
        yield put(actionsPizzas.actionSetLoading(false));
    } catch (e) {
        return e;
    }
}


export function* watcherPizzas() {
    yield takeEvery(PizzaAction.SAGA_ACTION_FOR_ADD_PIZZAS, workerAddPizzasBySort);
    yield takeEvery(Filters.SET_SORT_BY, workerAddPizzasBySort);
    yield takeEvery(Filters.SET_CATEGORY_BY, workerAddPizzasBySort);
}