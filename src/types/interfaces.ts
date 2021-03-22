import React from "react";

export interface ICategories {
    id?: number,
    name: string,
}

type TSortPopupName = 'популярности' | 'цене' | 'алфавиту';
export type TSortPopupType = 'rating' | 'price' | 'alphabet' | 'name';

export type TSortPopup = {
    name: TSortPopupName,
    type: TSortPopupType
};

export interface ICategoriesBase {
    items: Array<ICategories>
}

export type TypesHtmlElements = HTMLButtonElement | HTMLLIElement

export interface IHandlers {
    handlerClick?: (e: React.MouseEvent<TypesHtmlElements>) => void,
}

export  type TypesSize = 26 | 30 | 40;
export type TypesPizza = 'тонкое' | 'традиционное';

export interface IPizzaDataPublic {
    id: number,
    imageUrl: string,
    name: string,
    types: Array<number | TypesPizza>,
    sizes: Array<TypesSize>,
    price: number,
}

export interface IPizzaData extends IPizzaDataPublic {
    category: number,
    rating: number
}


export type eventSortPopup = 'CLOSE' | 'OPEN';


export type Loading = boolean;

export type HeaderProps = {
    totalPrice: number,
    totalCount: number
}