import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const form = css({
    '& input': {
        display: 'block',
    },

    '& span': {
        color: colors.red,
        display: 'block',
        fontSize: '.8rem',
    }
})