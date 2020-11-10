import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const tabs = css({
    display: 'flex',
    fontFamily: 'Montserrat',
    justifyContent: 'space-evenly',
    margin: '0 auto 1.5rem',
    width: '30%',
})

export const tab = css({
    color: colors.grayishBlueLight,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '1.2rem',

    '&:hover': {
        color: colors.grayishBlue,
        boxShadow: `0 1px 2px -2px ${colors.grayishBlue}`,
        transition: 'box-shadow .4s ease-in-out, color .4s ease-in-out',
    }
})

export const activeTab = css({
    boxShadow: `0 2px 2px -2px ${colors.grayishBlue}`,
    color: colors.grayishBlue,
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    paddingBottom: '.5rem',
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

export const noDataInfo = css({
    color: colors.grayishBlue,
    display: 'block',
    textAlign: 'center',
})