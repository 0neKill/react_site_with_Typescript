import {IPizzaDataPublic} from "../../types/interfaces";
import {CartAction} from "../../types/redux";
import {Cart} from "../types/cart";

export const addPizzaToCart = (pizzaObj: IPizzaDataPublic): CartAction => ({
    type: Cart.ADD_PIZZA_CART,
    payload: pizzaObj,
});

export const clearCart = (): CartAction => ({
    type: Cart.CLEAR_CART,
});

export const removeCartItem = (id: number): CartAction => ({
    type: Cart.REMOVE_CART_ITEM,
    payload: id,
});

export const plusCartItem = (id: number): CartAction => ({
    type: Cart.PLUS_CART_ITEM,
    payload: id,
});

export const minusCartItem = (id: number): CartAction => ({
    type: Cart.MINUS_CART_ITEM,
    payload: id,
});