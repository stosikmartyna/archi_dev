import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const table = css({
    borderCollapse: 'collapse',
    border: `1px solid ${colors.foggySkyLight}`,
    color: colors.nightSkyDark,
    margin: '0 auto',
    width: '70vw',

    '& th': {
        backgroundColor: colors.foggySkyLight,
        lineHeight: '2',
        padding: '.5rem 0 .5rem 1rem',
    },

    '& td': {
        border: `1px solid ${colors.foggySkyLight}`,
        padding: '.5rem 0',
        textAlign: 'center',
    }
})