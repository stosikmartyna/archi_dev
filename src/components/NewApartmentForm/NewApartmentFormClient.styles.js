import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const clientFormInputs = css({
    margin: '0 2rem',
})

export const clientInput = css({
    marginBottom: '1rem',

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
        width: '250px',
    },

    '& select': {
        border: 'none',
        borderBottom: `1px solid ${colors.foggySky}`,
        color: colors.nightSky,
        display: 'block',
        outline: 'none',
        padding: '.5rem 0',
        width: '255px',
    },

    '& span': {
        color: colors.red,
        fontSize: '.7rem',
    },
})