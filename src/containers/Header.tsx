import React from 'react';

import {Header as BaseHeader} from '../components';
import {useSelector} from "react-redux";
import {hookUseSelector} from "../redux/reducers";

export const Header: React.FunctionComponent = (): React.ReactElement => {
    const {totalPrice, totalCount} = useSelector(((state: hookUseSelector) => state.cart))
    return <BaseHeader totalCount={totalCount} totalPrice={totalPrice}/>
}