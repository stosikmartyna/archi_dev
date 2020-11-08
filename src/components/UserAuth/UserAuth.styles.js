import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const container = css({
    background: 'url("img/sign_form.jpg")',
    backgroundSize: 'cover',
    minHeight: '100vh',

    '&:after': {
        borderTop: '100vh solid rgba(255, 255, 255, 0.95)',
        borderLeft: '120px solid transparent',
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        width: '34%',
    },
})

export const appHeader = css({
    color: '#3e4654',
    fontFamily: 'Montserrat',
    fontSize: '5rem',
    marginTop: '6rem',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    zIndex: 1,      
    
    '& span': {
        color: colors.grayishBlue,
    }
})

export const authForm = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'absolute',        
    right: 0,
    top: 0,
    width: '34%',
    zIndex: 1,

    '& form': {
        width: '50%',
    },

    '& label': {
        color: colors.foggySky,
        letterSpacing: '.1rem',
    },

    '& input': {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: `1px solid ${colors.foggySky}`,
        color: '#5e6a72',
        fontSize: '1.1rem',
        letterSpacing: '.1rem',
        marginBottom: '1.5rem',
        outline: 'none',
        padding: '.5rem 0',
        width: '100%',
    },

    '& span': {
        color: colors.foggySky,
        cursor: 'pointer',
        display: 'block',
        letterSpacing: '.1rem',
        textAlign: 'center',
    },
        '& span:hover': {
            color: colors.foggySkyDark,
        },  
})