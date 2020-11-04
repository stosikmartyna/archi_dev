import React from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors';

const getFontSize = (size) => {
    if (size === 'small') return '1rem'
    if (size === 'medium') return '2rem'
    if (size === 'large') return '3rem'
}

export const Header = (props) => {
    const styles = css ({
        color: colors.nightSky,
        display: 'block',
        fontFamily: 'Montserrat',
        fontSize: getFontSize(props.size),
        fontWeight: `${props.fontWeight}`,
        margin: `${props.margin}rem`,
        textAlign: 'center',
    })

    return (
        <span className={styles}>{props.children}</span>
    )
}