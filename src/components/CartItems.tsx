import React from 'react';
import {CartItem} from "./";
import {IPizzaDataPublic} from "../types/interfaces";

type TCartItemsProps = {
    items: {
        [keys: number]: Array<IPizzaDataPublic>
    };
    handlerClick: (id: number) => void;
    handlerClickMinusCount: (id: number) => void;
    handlerClickPlusCount: (id: number) => void;

};
export const CartItems: React.FunctionComponent<TCartItemsProps> = ({
                                                                        items,
                                                                        handlerClick,
                                                                        handlerClickMinusCount,
                                                                        handlerClickPlusCount
                                                                    }): React.ReactElement => {

    return (
        <>
            {Object.keys(items).map((item, index) => {
                return (<CartItem key={`${item}_${index}`}
                                  cart_item={items[Number(item)]}
                                  handlerClick={() => handlerClick(Number(item))}
                                  handlerClickMinusCount={() => handlerClickMinusCount(Number(item))}
                                  handlerClickPlusCount={() => handlerClickPlusCount(Number(item))}
                />)
            })}
        </>
    )
}
