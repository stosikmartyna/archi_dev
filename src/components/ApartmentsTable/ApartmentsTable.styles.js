import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const table = css({
    borderCollapse: 'collapse',
    border: `1px solid ${colors.foggySkyLight}`,
    boxShadow: `0 0 10px ${colors.foggySkyLight}`,
    color: colors.nightSkyDark,
    margin: '0 auto 2rem',
    width: '70vw',

    '& th': {
        backgroundColor: colors.foggySkyLight,
        fontFamily: 'Montserrat',
        lineHeight: '2',
        padding: '.5rem 0 .5rem 1rem',
    },

    '& td': {
        border: `1px solid ${colors.foggySkyLight}`,
        padding: '.5rem 0',
        textAlign: 'center',
    },

    '& tr:nth-child(even)': {
        backgroundColor: '#f7f9fc',
    }
})