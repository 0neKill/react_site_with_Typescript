import React from 'react';
import classNames from "classnames";


import {ICategories, ICategoriesBase, IHandlers} from '../types/interfaces';

interface INewPropsCategories extends ICategoriesBase {
    handlerClickActiveElement: (id?: number | null) => void,
    activeElement: number | null
}

export const Categories: React.FunctionComponent<INewPropsCategories> = React.memo(({
                                                                                        items,
                                                                                        activeElement,
                                                                                        handlerClickActiveElement
                                                                                    }): React.ReactElement => {
        return (
            <div className="categories">
                <ul>
                    <CategoryItem name='Все' active={classNames({'active': activeElement === null})}
                                  handlerClick={e => handlerClickActiveElement(null)}
                    />
                    {items.map((item) => <CategoryItem key={item.id} {...item}
                                                       active={classNames({'active': activeElement === item.id})}
                                                       handlerClick={(e) => handlerClickActiveElement(item.id)}/>)}
                </ul>
            </div>
        );
    }
    , (prevProps, nextProps) => {
        return prevProps.activeElement === nextProps.activeElement;
    })

type TypeCategoryItem = ICategories & { active: string | undefined } & IHandlers;

const CategoryItem: React.FunctionComponent<TypeCategoryItem> = ({name, handlerClick, active}): React.ReactElement => {
    return <li className={active} onClick={handlerClick}>{name}</li>
}