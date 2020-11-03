import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const formContainer = css({
    width: '50%',

    '& h1': {
        color: colors.nightSky,
        letterSpacing: '.2rem',
        margin: '1.5rem',
        textAlign: 'center'
    }
})

export const apartmentFormInputs = css({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 2rem',
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