import {PizzasActions, TInitialState} from "../../types/redux";
import {PizzaAction} from '../types/pizza';


const InitialState: TInitialState = {
    pizzas_item: [],
    isLoading: false,
}

export default function reducerPizza(state = InitialState, action: PizzasActions): TInitialState {
    switch (action.type) {
        case PizzaAction.SET_PIZZAS: {
            return {
                ...state,
                pizzas_item: [...action.payload]
            };
        }
        case PizzaAction.IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            };
        }
        default :
            return state;
    }
}