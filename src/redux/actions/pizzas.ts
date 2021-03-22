import {IPizzaData, Loading} from "../../types/interfaces";
import {PizzasActions} from "../../types/redux";
import {PizzaAction} from "../types/pizza";


export const actionAddPizzas = (pizzas_items: Array<IPizzaData>): PizzasActions => {
    return {
        type: PizzaAction.SET_PIZZAS,
        payload: pizzas_items
    }
}


export const actionSetLoading = (loading: Loading): PizzasActions => {
    return {
        type: PizzaAction.IS_LOADING,
        payload: loading
    }
}
export const actionFetchPizzas = (): PizzasActions => ({type: PizzaAction.SAGA_ACTION_FOR_ADD_PIZZAS})