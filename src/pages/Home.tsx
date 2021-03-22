import React from 'react';
import {Categories, SortPopup, Pizzas} from "../containers";
import {ICategories} from "../types/interfaces";

const categories: Array<ICategories> = [
    {id: 1, name: 'Мясные'},
    {id: 2, name: 'Вегетарианская'},
    {id: 3, name: 'Гриль'},
    {id: 4, name: 'Острые'},
    {id: 5, name: 'Закрытые'},
]

export const Home: React.FunctionComponent = () => {
    return <div className="container">
        <div className="content__top">
            <Categories items={categories}/>
            <SortPopup/>
        </div>
        <Pizzas/>
    </div>
}