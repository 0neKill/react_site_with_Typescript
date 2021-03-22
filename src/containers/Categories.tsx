import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";


import {Categories as BaseCategories} from '../components';
import {ICategoriesBase} from "../types/interfaces";
import {FilterAction} from "../types/redux";
import {actionsFilters} from '../redux/actions';
import {hookUseSelector} from "../redux/reducers";


export const Categories: React.FunctionComponent<ICategoriesBase> = React.memo(({items}) => {
    const {category} = useSelector((state: hookUseSelector) => state.filter);
    const dispatch = useDispatch<Dispatch<FilterAction>>();
    const handlerClickActiveElement = (id?: number | null): FilterAction => dispatch(actionsFilters.SetCategoryBy(id!));
    return (
        <BaseCategories
            activeElement={category}
            handlerClickActiveElement={handlerClickActiveElement}
            items={items}/>
    )
})