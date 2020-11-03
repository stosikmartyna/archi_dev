import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const container = css({
    display: 'flex',
})

export const formContainer = css({
    margin: 'auto 0',
    width: '50%',
    zIndex: '1',

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

export const clientFormInputs = css({
    margin: '0 2rem',
})

export const imageContainer = css({
    background: 'url("img/new_apartment_form.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 49px)',
    opacity: '.5',
    width: '50%',

    '&:after': {
        borderBottom: 'calc(100vh - 49px) solid transparent',
        borderLeft: `13vw solid ${colors.white}`,
        content: '""',
        position: 'absolute',
    },
})