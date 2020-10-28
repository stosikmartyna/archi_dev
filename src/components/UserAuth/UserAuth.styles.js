import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const container = css({
    background: 'url("img/sign_form.jpg")',
    backgroundSize: 'cover',
    minHeight: '100vh',
    position: 'relative',
    width: '100%',
    
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

    '& h1': {
        color: colors.foggySky,
        fontWeight: 'lighter',
        marginBottom: '1.5rem',
        textAlign: 'center',
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

    '& button': {
        backgroundColor: colors.foggySky,
        border: 'none',
        borderRadius: '3px',
        boxShadow: `0px 0px 5px ${colors.foggySkyLight}`,
        color: colors.white,
        cursor: 'pointer',
        display: 'block',
        letterSpacing: '.1rem',
        margin: '0 auto 1rem',
        outline: 'none',
        padding: '.4rem .7rem',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease 0s',
    },

        '& button:hover': {
            backgroundColor: colors.foggySkyDark,
            transform: 'translateY(-1px)',
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