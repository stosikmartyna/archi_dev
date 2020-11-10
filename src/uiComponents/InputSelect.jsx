import React from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors';

export const InputSelect = (props) => {
    const styles = css({
        margin: '0 1rem 1rem 1rem',
    
        '& label': {
            color: colors.foggySky,
            letterSpacing: '.1rem',
        },
    
        '& select': {
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: `1px solid ${colors.foggySky}`,
            color: colors.nightSky,
            fontFamily: 'Ubuntu',
            fontSize: '1rem',
            display: 'block',
            outline: 'none',
            padding: '.53rem 0',
            width: props.width ? `${props.width}px` : '180px',
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
                    return <option value={option.value} key={option.value}>{option.name}</option>
                })}
            </select>
            {props.error && <span>This field is required</span>}
        </div>
    )
}