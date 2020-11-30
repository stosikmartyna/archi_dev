import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const appHeader = css({
    color: '#3e4654',
    fontFamily: 'Montserrat',
    fontSize: '3rem',
    margin: '1rem 0',
    textAlign: 'center',
    
    '& span': {
        color: colors.grayishBlue,
    }
})

export const boxes = css ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 'auto',
    maxWidth: '90%',
})

export const boxContainer = css ({
    backgroundColor: '#f2f4f7',
    borderRadius: '8px',
    height: '260px',
    margin: '.5rem 0 1.5rem 0',
    minWidth: '500px'
})