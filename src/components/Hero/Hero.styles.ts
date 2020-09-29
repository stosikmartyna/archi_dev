import { css } from 'emotion';

export const heroContainer = css({
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
})

export const slide = (value: number) => css({
    minWidth: '100%',
    overflow: 'hidden',
    transform: `translateX(${value}%)`,
    transition: '0.5s',
})

export const sliderImg = css({
    height: 'auto',
    width: '100vw',
})

export const arrowButtonLeft = css({
    color: '#030102',
    cursor: 'pointer',
    left: 0,
    position: 'absolute',
    top: '85%',
    zIndex: 99,

    '& :hover': {
        color: '#323232',
    }
})

export const arrowButtonRight = css({
    color: '#030102',
    cursor: 'pointer',
    position: 'absolute',
    right: 10,
    top: '85%',

    '& :hover': {
        color: '#323232',
    }
})

export const headerSection = css({
    backgroundColor: '#262626',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    padding: '0 2rem',
    position: 'absolute',
    maxWidth: '30vw',
    
    '& h1': {
        fontSize: '3.5rem',
        letterSpacing: '.5rem',
        lineHeight: '3.5rem'
    },

    '& span': {
        fontSize: '.8rem'
    }
})