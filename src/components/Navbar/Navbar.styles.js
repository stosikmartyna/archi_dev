import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const navbar = css({
    boxShadow: '0 0 5px lightgrey',
    display: 'flex',
    fontFamily: 'Montserrat',
    justifyContent: 'space-between',
    padding: '.8rem 0',
    width: '100%',

    '& a:hover': {
        color: colors.nightSkyDark
    }
})

export const navbarLink = css({
    color: colors.nightSky,
    letterSpacing: '.1rem',
    paddingLeft: '1.5rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
})

export const navbarUser = css({
    color: colors.nightSky,
    fontSize: '.8rem',
    letterSpacing: '.1rem',
    paddingRight: '1.5rem',

    '& span': {
        paddingLeft: '.5rem'
    }
})