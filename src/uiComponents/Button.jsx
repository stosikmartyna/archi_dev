import React from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors';

export const Button = (props) => {
    const isReset = props.type === 'reset';

    const styles = css({
        backgroundColor: isReset ? colors.white : colors.foggySky,
        border: 'none',
        borderRadius: '3px',
        boxShadow: !isReset && `0px 0px 5px ${colors.foggySkyLight}`,
        color: isReset ? colors.foggySky : colors.white,
        cursor: 'pointer',
        display: 'block',
        letterSpacing: '.1rem',
        margin: '1rem auto',
        outline: 'none',
        padding: '.4rem .7rem',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease 0s',

            '&:hover': {
                backgroundColor: !isReset && colors.foggySkyDark,
                transform: 'translateY(-1px)',
            },
    })

    return (
        <button 
            className={styles} 
            disabled={props.disabled}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}
