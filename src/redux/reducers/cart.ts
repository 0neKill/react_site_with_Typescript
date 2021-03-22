import {CartAction, TInitialStateCart} from "../../types/redux";
import {Cart} from "../types/cart";
import {IPizzaDataPublic} from "../../types/interfaces";

const InitialStateCart: TInitialStateCart = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}

type TNewItem = {
    [key: number]: Array<IPizzaDataPublic>
};

const arrayItems = (item: TNewItem): Array<IPizzaDataPublic> => (Object.values(item).reduce((sum, next) => [...sum, ...next], []));
const incrementTotalPrice = (arrayItems: Array<IPizzaDataPublic>) => (arrayItems.reduce((sum, next) => sum += next.price, 0));

export default function reducerCart(state = InitialStateCart, action: CartAction): TInitialStateCart {
    switch (action.type) {
        case Cart.ADD_PIZZA_CART: {
            const newItem: TNewItem = {
                ...state.items,
                [action.payload.id]: state.items[action.payload.id] ? [
                    ...state.items[action.payload.id],
                    action.payload
                ] : [action.payload]
            };

            const arrayAllItems: Array<IPizzaDataPublic> = arrayItems(newItem);
            const totalPrice: number = incrementTotalPrice(arrayAllItems);

            return {
                ...state,
                items: newItem,
                totalCount: arrayAllItems.length,
                totalPrice: totalPrice
            }
        }
        case Cart.CLEAR_CART: {
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }
        }
        case Cart.MINUS_CART_ITEM: {
            const NewArray: Array<IPizzaDataPublic> = [...state.items[action.payload]];
            if (NewArray.length > 1) NewArray.pop();
            const newObjectItem: TNewItem = {
                ...state.items,
                [action.payload]: NewArray
            };

            const arrayAllItems: Array<IPizzaDataPublic> = arrayItems(newObjectItem);
            const totalPrice: number = incrementTotalPrice(arrayAllItems);

            return {
                ...state,
                items: newObjectItem,
                totalCount: arrayAllItems.length,
                totalPrice: totalPrice,
            }
        }
        case Cart.PLUS_CART_ITEM: {
            const NewArray: Array<IPizzaDataPublic> = [...state.items[action.payload], state.items[action.payload][0]];

            const newObjectItem: TNewItem = {
                ...state.items,
                [action.payload]: NewArray
            };

            const arrayAllItems: Array<IPizzaDataPublic> = arrayItems(newObjectItem);
            const totalPrice: number = incrementTotalPrice(arrayAllItems);

            return {
                ...state,
                items: newObjectItem,
                totalCount: arrayAllItems.length,
                totalPrice: totalPrice,
            }
        }
        case Cart.REMOVE_CART_ITEM: {
            const newItems: TNewItem = {...state.items}
            delete newItems[action.payload];

            const arrayAllItems: Array<IPizzaDataPublic> = arrayItems(newItems);
            const totalPrice: number = incrementTotalPrice(arrayAllItems);

            return {
                ...state,
                items: newItems,
                totalCount: arrayAllItems.length,
                totalPrice: totalPrice
            }
        }
        default:
            return state
    }
}

