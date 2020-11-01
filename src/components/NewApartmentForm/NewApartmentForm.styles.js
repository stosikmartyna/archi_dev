import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const formContainer = css({
    width: '50%',

    '& h1': {
        color: colors.nightSky,
        letterSpacing: '.2rem',
        margin: '1.5rem',
        textAlign: 'center'
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
        margin: '1rem auto',
        outline: 'none',
        padding: '.4rem .7rem',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease 0s',
    },

        '& button:hover': {
            backgroundColor: colors.foggySkyDark,
            transform: 'translateY(-1px)',
        },
})

export const apartmentFormInputs = css({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 2rem',
})

export const inputElements = css({
    width: '105px',

    '& label': {
        color: colors.foggySky,
        letterSpacing: '.1rem',
    },

    '& input': {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: `1px solid ${colors.foggySky}`,
        color: colors.nightSky,
        display: 'block',
        fontSize: '1.1rem',
        letterSpacing: '.1rem',
        outline: 'none',
        padding: '.5rem 0',
        textAlign: 'center',
        width: '80px',
    },

    '& select': {
        border: 'none',
        borderBottom: `1px solid ${colors.foggySky}`,
        color: colors.nightSky,
        display: 'block',
        outline: 'none',
        padding: '.6rem 0',
    },

    '& span': {
        color: colors.red,
        fontSize: '.7rem',
    },
})

export const imageContainer = css({
    background: 'url("img/new_apartment_form.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'absolute',        
    right: 0,
    top: 0,
    width: '50%',
    zIndex: '-1',

    '&:after': {
        borderBottom: '100vh solid rgba(255, 255, 255, 0.8)',
        borderLeft: '15vw solid white',
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        width: '70%',
    },
})