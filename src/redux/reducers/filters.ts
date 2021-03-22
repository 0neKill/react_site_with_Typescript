import {FilterAction, TInitialStateFilters} from "../../types/redux";
import {Filters} from "../types/filters";

const initialState: TInitialStateFilters = {
    category: null,
    sortBy: "rating",
}

export default function reducerFilter(state = initialState, action: FilterAction): TInitialStateFilters {
    switch (action.type) {
        case Filters.SET_CATEGORY_BY: {
            return {
                ...state,
                category: action.payload
            }
        }
        case Filters.SET_SORT_BY: {
            return {
                ...state,
                sortBy: action.payload
            }
        }
        default :
            return state
    }
}