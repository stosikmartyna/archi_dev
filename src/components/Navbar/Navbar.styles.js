import { css } from 'emotion';
import { colors } from '../../helpers/colors';

export const navbar = css({
    backgroundColor: colors.iceBlue,
    boxShadow: `0px 0px 5px ${colors.lightGrey}`,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.3rem 0',
    width: '100%',
})

export const navbarUser = css({
    color: colors.darkSky,
    fontSize: '.8rem',
    letterSpacing: '.1rem',
    paddingLeft: '1rem',

    '& span': {
        paddingLeft: '.5rem'
    }
})

export const link = css({
    color: colors.darkSky,
    letterSpacing: '.1rem',
    paddingRight: '1.8rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
})