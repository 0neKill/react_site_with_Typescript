import React from "react";
import {Link} from "react-router-dom";

import empty_cart  from '../../assets/img/empty-cart.png';


export const CartEmpty: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>Корзина пустая <i>😕</i></h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.<br/>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={empty_cart} alt="Empty cart"/>
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}