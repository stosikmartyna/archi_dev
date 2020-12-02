import React from 'react';
import { Header } from '../../uiComponents/Header';
import { box } from './Dashboard.styles';

export const DashboardBox = (props) => {
    return (
        <div className={box}>
            <Header size={'small'} margin={'1.5'} fontWeight={'bolder'}>
                {props.header}
            </Header>
            {props.children}
        </div>
    )
} 