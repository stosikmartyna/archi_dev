import React from 'react';
import { logo } from './AppLogo.styles';

export const AppLogo = (props) => {
    const {absolute, size, marginTop, marginBottom} = props;

    const logoStyle = logo(absolute, size, marginTop, marginBottom);
    
    return (
        <h1 className={logoStyle}>
            Archi<span>Dev</span>
        </h1>
    )
}