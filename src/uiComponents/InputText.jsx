import React from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors';

export const InputText = (props) => {
    const styles = css({
        margin: '0 1rem 1rem 1rem',

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
            <input id={props.id} type={props.type} value={props.value} onChange={props.onChange} autoComplete={'off'} />
            {props.error && <span>This field is required</span>}
        </div>
    )
}