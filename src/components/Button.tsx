import React from 'react';
import classNames from 'classnames'
import {IHandlers} from '../types/interfaces';


interface IProps extends IHandlers {
    className: string,
    outline?: boolean,
}


export default function Button({className, outline, handlerClick, children}: React.PropsWithChildren<IProps>): React.ReactElement {
    return (
        <button onClick={handlerClick}
                className={classNames('button', className, {'button--outline': outline})}>{children}</button>
    )
}


