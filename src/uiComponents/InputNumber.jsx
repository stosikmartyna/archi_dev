import React from 'react';
import NumberFormat from 'react-number-format';
import { css } from 'emotion';
import { colors } from '../constants/colors';

export const InputNumber = (props) => {
    const styles = css({
        width: '105px',
    
        '& label': {
            color: colors.foggySky,
            letterSpacing: '.1rem',
        },
    
        '& input': {
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: `1px solid ${colors.foggySky}`,
            color: colors.nightSky,
            display: 'block',
            fontSize: '1.1rem',
            letterSpacing: '.1rem',
            outline: 'none',
            padding: '.5rem 0',
            textAlign: 'center',
            width: '80px',
        },
    
        '& span': {
            color: colors.red,
            fontSize: '.7rem',
        },
    })

    return (
        <div className={styles}>
            <label htmlFor={props.id}>{props.label}</label>
            <NumberFormat 
                id={props.id}
                value={props.value} 
                onChange={props.onChange}
                allowNegative={false}
                autoComplete={'off'}
                decimalScale={props.decimalScale}
            />
            {props.error && <span>This field is required</span>}
        </div>
    )
}