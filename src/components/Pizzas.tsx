import React from 'react';

import {PizzaItem} from './';
import {IPizzaData, IPizzaDataPublic} from "../types/interfaces";

type TNewItem = {
    [key: number]: Array<IPizzaDataPublic>
};


type  PizzasProps = {
    pizzas_items: Array<IPizzaData>,
    handlerAddPizzaToCart: (item: IPizzaDataPublic) => void,
    items_cart: TNewItem
}

export const Pizzas: React.FunctionComponent<PizzasProps> = ({
                                                                 pizzas_items,
                                                                 handlerAddPizzaToCart,
                                                                 items_cart
                                                             }) => {
    return <>
        {pizzas_items.map((item) => (
            <PizzaItem key={item.id} {...item} handlerAddPizzaToCart={handlerAddPizzaToCart}
                       item_cart={items_cart[item.id]}
            />
        ))}

    </>
}