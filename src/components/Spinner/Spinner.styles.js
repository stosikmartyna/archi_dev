import { css, keyframes } from 'emotion';
import { colors } from '../../constants/colors';

const spin = keyframes`
    from, 0% {
        transform: rotate(0deg)
    }
    70% {
        transform: rotate(180deg)
    }
    to, 100% {
        transform: rotate(360deg)
    }
`

export const spinnerContainer = css ({
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 2,
})

export const spinner = css ({
    animation: `${spin} 1s linear infinite`,
    border: '3px solid transparent',
    borderTopColor: colors.grayishBlue,
    borderBottomColor: colors.grayishBlue,
    borderRadius: '50%',
    height: '100px',
    left: 'calc(50% - 50px)',
    position: 'absolute',
    top: 'calc(50% - 50px)',
    width: '100px',
})