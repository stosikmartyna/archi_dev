import React from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors';

export const SlantedDiv = (props) => {
    const styles = css({
        backgroundImage: `url(${props.imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 49px)',
        opacity: '.5',
        width: '50%',
    
        '&:after': {
            borderBottom: 'calc(100vh - 49px) solid transparent',
            borderLeft: `13vw solid ${colors.white}`,
            content: '""',
            position: 'absolute',
        },
    })

    return (
        <div className={styles} />
    )
}