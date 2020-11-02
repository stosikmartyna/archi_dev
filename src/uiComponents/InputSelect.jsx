import React from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors';

export const InputSelect = (props) => {
    const styles = css({
        width: '105px',
    
        '& label': {
            color: colors.foggySky,
            letterSpacing: '.1rem',
        },
    
        '& select': {
            border: 'none',
            borderBottom: `1px solid ${colors.foggySky}`,
            color: colors.nightSky,
            display: 'block',
            outline: 'none',
            padding: '.6rem 0',
        },
    
        '& span': {
            color: colors.red,
            fontSize: '.7rem',
        },
    })

    return (
        <div className={styles}>
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} value={props.value} onChange={props.onChange}>
                {props.options.map(option => {
                    return <option value={option.value}>{option.name}</option>
                })}
            </select>
        </div>
    )
}