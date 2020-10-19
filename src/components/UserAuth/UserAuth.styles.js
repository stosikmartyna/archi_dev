import { css } from 'emotion';

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

    '& label': {
        color: 'grey',
    },

    '& input': {
        display: 'block',
    }
})