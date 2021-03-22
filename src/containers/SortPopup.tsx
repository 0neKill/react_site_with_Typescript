import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";

import {SortPopup as BaseSortPopup} from '../components'
import {eventSortPopup, TSortPopup, TSortPopupType} from "../types/interfaces";
import {actionsFilters} from "../redux/actions/";
import {hookUseSelector} from "../redux/reducers";
import {FilterAction} from "../types/redux";



const arraySortPopup: Array<TSortPopup> = [{name: "популярности", type: "rating"}, {
    name: "цене",
    type: "price"
}, {name: "алфавиту", type: "name"}];

export const SortPopup: React.FunctionComponent = React.memo(() => {

    const {sortBy} = useSelector((state: hookUseSelector) => state.filter);

    const [eventPopup, setEventPopup] = useState<boolean>(false);

    const visibleRef = useRef<eventSortPopup>('CLOSE');
    const sortRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch<Dispatch<FilterAction>>();

    const handlerActiveItem = (name: TSortPopupType) => {
        dispatch(actionsFilters.SetSortBy(name));
        setEventPopup(false);
    }

    const eventTogglePopup = (event: MouseEvent) => {
        const target: HTMLElement = event.target as HTMLElement;
        if (sortRef.current && !target.offsetParent?.classList.contains(sortRef.current!.className)) {
            visibleRef.current = 'CLOSE'
            setEventPopup(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', eventTogglePopup);
        return () => document.body.removeEventListener('click', eventTogglePopup)
    }, [])

    const handlerTogglePopup = () => {
        setEventPopup(state => {
            visibleRef.current = !state ? 'OPEN' : 'CLOSE';
            return !state;
        });
    };
    return <BaseSortPopup
        active_item={sortBy}
        items={arraySortPopup}
        even_popup={eventPopup}
        visibleRef={visibleRef}
        handlerActiveItem={handlerActiveItem}
        handlerTogglePopup={handlerTogglePopup}

        ref={sortRef}

    />
})