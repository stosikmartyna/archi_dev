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

export const spinner = css({
    animation: `${spin} 1s linear infinite`,
    border: `2px solid ${colors.foggySkyLight}`,
    borderTopColor: colors.grayishBlue,
    borderBottomColor: colors.grayishBlue,
    borderRadius: '50%',
    height: '70px',
    margin: '1.5rem auto 0',
    width: '70px',
})