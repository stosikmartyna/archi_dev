import React from 'react'; 
import { spinnerContainer, spinner } from './Spinner.styles';

export const Spinner = () => {
    return (
        <div className={spinnerContainer}>
            <div className={spinner}></div>
        </div>
    )
}