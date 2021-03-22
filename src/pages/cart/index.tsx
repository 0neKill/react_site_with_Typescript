import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";

import {Cart as BaseCart} from './Cart';
import {CartEmpty} from './Cart-empry';
import {hookUseSelector} from "../../redux/reducers";
import {CartAction} from "../../types/redux";
import {actionsCart} from "../../redux/actions";

export const Cart: React.FunctionComponent = (): React.ReactElement => {

    const {totalCount, totalPrice, items} = useSelector((state: hookUseSelector) => state.cart);
    const dispatch = useDispatch<Dispatch<CartAction>>();

    const itemsLength = React.useMemo(() => Object.keys(items).length, [items]);

    const handlerRemoveToAllPizzas = (): CartAction => dispatch(actionsCart.clearCart());
    const handlerClickMinusCount = (id: number): CartAction => dispatch(actionsCart.minusCartItem(id));
    const handlerClickPlusCount = (id: number): CartAction => dispatch(actionsCart.plusCartItem(id));
    const handlerClick = (id: number): CartAction => dispatch(actionsCart.removeCartItem(id));

    return (
        <>
            {itemsLength > 0 ? <BaseCart handlerRemoveToAllPizzas={handlerRemoveToAllPizzas}
                                         handlerClick={handlerClick}
                                         handlerClickMinusCount={handlerClickMinusCount}
                                         handlerClickPlusCount={handlerClickPlusCount}
                                         totalPrice={totalPrice}
                                         totalCount={totalCount}
                                         items={items}/> : <CartEmpty/>}
        </>
    )
}