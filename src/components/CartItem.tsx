import React from 'react';
import {IPizzaDataPublic} from "../types/interfaces";
import {Button} from "./";

type TCartItemProps = {
    cart_item: Array<IPizzaDataPublic>
    handlerClick: () => void;
    handlerClickMinusCount: () => void;
    handlerClickPlusCount: () => void;
}

export const CartItem: React.FunctionComponent<TCartItemProps> = ({
                                                                      cart_item,
                                                                      handlerClick,
                                                                      handlerClickMinusCount,
                                                                      handlerClickPlusCount
                                                                  }): React.ReactElement => {

    const allPrice = React.useMemo(() => {
        return cart_item.reduce((sum, next) => sum += next.price, 0);
    }, [cart_item]);

    return <div className="cart__item">
        <div className="cart__item-img">
            <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
            />
        </div>
        <div className="cart__item-info">
            <h3>{cart_item[0].name}</h3>
            {cart_item.map((item, index) => (
                <p key={`${item.id}_${index}`}>{item.types[0]} тесто, {item.sizes[0]} см.</p>))}
        </div>
        <div className="cart__item-count">
            <Button className={`button--circle cart__item-count-minus ${cart_item.length === 1 && 'disabled'}`} outline handlerClick={handlerClickMinusCount} >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                        fill="#EB5A1E"/>
                    <path
                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                        fill="#EB5A1E"/>
                </svg>

            </Button>
            <b>{cart_item.length}</b>
            <Button className="button--circle cart__item-count-plus" outline handlerClick={handlerClickPlusCount}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                        fill="#EB5A1E"/>
                    <path
                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                        fill="#EB5A1E"/>
                </svg>
            </Button>
        </div>
        <div className="cart__item-price">
            <b>{allPrice} ₽</b>
        </div>
        <div className="cart__item-remove">
            <Button className="button--circle" outline handlerClick={handlerClick}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                        fill="#EB5A1E"/>
                    <path
                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                        fill="#EB5A1E"/>
                </svg>
            </Button>
        </div>
    </div>
}