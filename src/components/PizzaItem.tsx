import React, {useState} from 'react';
import {IPizzaData, IPizzaDataPublic, TypesPizza, TypesSize} from "../types/interfaces";
import classNames from "classnames";
import {Button} from "./index";


const arrTypes: Array<TypesPizza> = ['традиционное', "тонкое"];
const arrSize: Array<TypesSize> = [26, 30, 40];

type PizzaItemProps = {
    handlerAddPizzaToCart: (item: IPizzaDataPublic) => void;
    item_cart: Array<IPizzaDataPublic>
}

export const PizzaItem: React.FunctionComponent<IPizzaData & PizzaItemProps> = ({
                                                                                    id,
                                                                                    name,
                                                                                    imageUrl,
                                                                                    price,
                                                                                    sizes,
                                                                                    types,
                                                                                    handlerAddPizzaToCart,
                                                                                    item_cart
                                                                                }) => {

    const [types_pizza_active, setTypesPizza] = useState<number | string>(types[0]);
    const [size_pizza_active, setSizePizza] = useState<TypesSize>(sizes[0]);

    const handlerSelectTypesPizza = (index: number) => setTypesPizza(index);
    const handlerSelectSizePizza = (index: TypesSize) => setSizePizza(index);

    const handlerCreateObjectPizzaToCart = () => {
        const obj = {
            id,
            imageUrl,
            name,
            types: Array(1).fill(arrTypes[types_pizza_active as number]),
            sizes: Array(1).fill(size_pizza_active),
            price,
        }
        handlerAddPizzaToCart(obj);
    }

    return <div className="pizza-block">
        <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
        />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
            <ul>
                {arrTypes.map((name, index) => (
                    <li
                        key={`${name}_${index}`}
                        onClick={() => handlerSelectTypesPizza(index)}
                        className={classNames({
                            'disabled': !types.includes(index),
                            'active': types_pizza_active === index
                        })}>
                        {name}
                    </li>))}
            </ul>
            <ul>
                {arrSize.map((size, index) => (
                    <li key={`${index}_${size}`}
                        onClick={() => handlerSelectSizePizza(size)}
                        className={classNames({
                            'disabled': !sizes.includes(size),
                            'active': size_pizza_active === size
                        })}>{size} см.</li>
                ))}
            </ul>
        </div>
        <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
            <Button className="button--add" handlerClick={handlerCreateObjectPizzaToCart} outline>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                    />
                </svg>
                <span>Добавить</span>
                {item_cart &&
                <i>{item_cart.length}</i>}
            </Button>
        </div>
    </div>
}