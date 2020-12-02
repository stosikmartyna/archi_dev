import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const logo = (isAbsolute, size, marginTop, marginBottom) => css({
    color: '#3e4654',
    fontFamily: 'Montserrat',
    fontSize: size ? `${size}rem` : '2rem',
    marginBottom: marginBottom ? `${marginBottom}rem` : '1rem',
    marginTop: marginTop ? `${marginTop}rem` : '1rem',
    position: isAbsolute ? 'absolute' : 'static',
    textAlign: 'center',
    width: '100%',
    zIndex: 1,      
    
    '& span': {
        color: colors.grayishBlue,
    }
})