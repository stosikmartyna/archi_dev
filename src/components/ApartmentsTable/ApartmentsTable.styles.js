import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const tabs = css({
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0 auto 1.5rem',
    width: '30%',
})

export const tab = css({
    color: colors.nightSky,
    cursor: 'pointer',
    fontSize: '1.2rem',

    '&:hover': {
        color: colors.nightSkyDark,
    }
})

export const activeTab = css({
    color: 'blue',
    cursor: 'pointer',
    fontSize: '1.2rem',
})

export const table = css({
    borderCollapse: 'collapse',
    border: `1px solid ${colors.foggySkyLight}`,
    boxShadow: `0 0 10px ${colors.foggySkyLight}`,
    color: colors.nightSkyDark,
    margin: '0 auto 2rem',
    width: '70%',

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