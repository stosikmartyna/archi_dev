import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const container = css({
    backgroundImage: 'url("img/sign_form.jpg")',
    backgroundSize: 'cover',
    height: 'calc(100vh - 48px)',
    position: 'absolute',
    width: '100vw',
})

export const containerText = css({
    alignItems: 'center',
    backgroundColor: 'rgba(245, 248, 250, 0.8)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50vh',
    margin: '5rem auto 0',
    width: '50vw',

    '& h1': {
        color: colors.nightSky,
    },

    '& h2': {
        color: colors.grayishBlue,
        marginBottom: '2rem',
    }
})