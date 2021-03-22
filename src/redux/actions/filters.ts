import {FilterAction} from "../../types/redux";
import {Filters} from "../types/filters";
import {TSortPopupType} from "../../types/interfaces";

export const SetCategoryBy = (category: number | null): FilterAction => ({
    type: Filters.SET_CATEGORY_BY,
    payload: category
})

export const SetSortBy = (sort: TSortPopupType): FilterAction => ({
    type: Filters.SET_SORT_BY,
    payload: sort
});


