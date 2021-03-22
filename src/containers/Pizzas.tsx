import React, {useEffect} from 'react';
import {useDispatch, useSelector,} from 'react-redux';
import {Dispatch} from "redux";

import {MyLoader, Pizzas as BasePizza} from '../components';
import {actionsPizzas, actionsCart} from "../redux/actions";

import {hookUseSelector} from "../redux/reducers";
import {CartAction, PizzasActions} from "../types/redux";
import {IPizzaDataPublic} from "../types/interfaces";


export const Pizzas: React.FunctionComponent = React.memo(() => {

    const {pizzas_item, isLoading, items_cart} = useSelector((state: hookUseSelector) => ({
        pizzas_item: state.pizza.pizzas_item,
        isLoading: state.pizza.isLoading,
        items_cart: state.cart.items
    }));

    const dispatch = useDispatch<Dispatch<PizzasActions | CartAction>>();

    useEffect(() => {
        if (pizzas_item.length === 0) dispatch(actionsPizzas.actionFetchPizzas());
    }, [dispatch, pizzas_item.length]);

    const handlerAddPizzaToCart = (pizza_obj: IPizzaDataPublic) => {

        dispatch(actionsCart.addPizzaToCart(pizza_obj))
    }

    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? <>{Array(pizzas_item.length ? pizzas_item.length : 10).fill(undefined).map(((value, index) =>
                        <MyLoader key={`${value}_${Math.random()}_${index}`}/>))}</> :
                    <BasePizza pizzas_items={pizzas_item} handlerAddPizzaToCart={handlerAddPizzaToCart} items_cart={items_cart}/>}
            </div>
        </>
    )
})