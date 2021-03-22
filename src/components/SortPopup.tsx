import React from 'react';
import classNames from 'classnames';
import {motion} from 'framer-motion';

import {eventSortPopup, TSortPopup, TSortPopupType} from "../types/interfaces";


type SortPopupProps = {
    handlerTogglePopup: () => void,
    handlerActiveItem: (name: TSortPopupType) => void,
    active_item: TSortPopupType,
    items: Array<TSortPopup>,
    even_popup: boolean,
    visibleRef: React.MutableRefObject<eventSortPopup>
}

const variants = {
    CLOSE: {opacity: 0.2, scale: 0.2},
    OPEN: {opacity: 1, scale: 1, transition: {type: 'spring', duration: .4},},
}

export const SortPopup = React.forwardRef<HTMLDivElement, SortPopupProps>(({
                                                                               handlerActiveItem,
                                                                               active_item,
                                                                               even_popup,
                                                                               handlerTogglePopup,
                                                                               items,
                                                                               visibleRef
                                                                           }, ref) => {

    const types: TSortPopup | undefined = React.useMemo(() => items.find(item => item.type === active_item), [active_item, items]);

    return (
        <div ref={ref} className="sort">
            <div className="sort__label">
                <svg
                    className={even_popup ? 'rotated' : undefined}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={handlerTogglePopup}>{types!.name}</span>
            </div>
            {even_popup &&
            <motion.div initial='CLOSE' animate={visibleRef.current} variants={variants} className="sort__popup">
                <ul>
                    {items.map((item, index) => (
                        <li className={classNames({'active': item.type === active_item})} key={`${item}_${index}`}
                            onClick={() => handlerActiveItem(item.type)}>{item.name}</li>
                    ))}
                </ul>
            </motion.div>}
        </div>
    )
})