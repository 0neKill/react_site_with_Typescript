import {PizzaAction} from '../redux/types/pizza';
import {Filters} from '../redux/types/filters';
import {Cart} from '../redux/types/cart';
import {IPizzaData, IPizzaDataPublic, Loading, TSortPopupType} from './interfaces';

export type TInitialState = {
    pizzas_item: Array<IPizzaData> | [],
    isLoading: Loading,
}

export type TInitialStateFilters = {
    category: number | null,
    sortBy: TSortPopupType
}
export type TInitialStateCart = {
    items: {
        [key: number]: Array<IPizzaDataPublic>
    },
    totalPrice: number,
    totalCount: number
}

interface ISetSortBy {
    type: typeof Filters.SET_SORT_BY,
    payload: TSortPopupType
}

interface ISetCategoryBy {
    type: typeof Filters.SET_CATEGORY_BY,
    payload: number | null
}

interface IAddPizzas {
    type: typeof PizzaAction.SET_PIZZAS,
    payload: Array<IPizzaData>
}

interface ILoading {
    type: typeof PizzaAction.IS_LOADING,
    payload: Loading
}

interface IActionFetchPizzas {
    type: typeof PizzaAction.SAGA_ACTION_FOR_ADD_PIZZAS
}

interface IAddPizzaToCart {
    type: typeof Cart.ADD_PIZZA_CART,
    payload: IPizzaDataPublic,
}

interface IClearCart {
    type: typeof Cart.CLEAR_CART,
}

interface IRemoveCartItem {
    type: typeof Cart.REMOVE_CART_ITEM,
    payload: number,
}

interface IPlusCartItem {
    type: typeof Cart.PLUS_CART_ITEM,
    payload: number,
}

interface IMinusCartItem {
    type: typeof Cart.MINUS_CART_ITEM,
    payload: number,
}


export type PizzasActions = IAddPizzas | ILoading | IActionFetchPizzas;
export type FilterAction = ISetSortBy | ISetCategoryBy;
export type CartAction = IClearCart | IRemoveCartItem | IPlusCartItem | IMinusCartItem | IAddPizzaToCart