import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const form = css({
    '& input': {
        display: 'block',
        marginBottom: '.3rem',
    },

    '& select': {
        display: 'block',
        marginBottom: '.3rem',
    },

    '& span': {
        color: colors.red,
        display: 'block',
        fontSize: '.8rem',
        marginBottom: '.3rem',
    }
})