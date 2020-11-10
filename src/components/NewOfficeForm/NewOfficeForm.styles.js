import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const container = css({
    display: 'flex',
})

export const formContainer = css({
    margin: 'auto 0',
    width: '50%',
    zIndex: '1',
})

export const officeFormInputs = css({
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: '640px',
})

export const imageContainer = css({
    background: 'url("img/new_office_form.jpg")',
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