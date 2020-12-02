import { css } from 'emotion';
import { colors } from '../../constants/colors';

export const boxes = css ({
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: 'Montserrat',
    justifyContent: 'space-between',
    height: '560px',
    margin: 'auto',
    maxWidth: '1020px',
})

export const box = css ({
    alignItems: 'center',
    backgroundColor: '#f2f4f7',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '260px',
    minWidth: '500px',
})

export const boxValue = css({
    color: colors.grayishBlue,
    fontSize: '2.5rem',
    fontWeight: 'bold',
})

export const officesBoxContent = css({
    display: 'flex',
    justifyContent: 'space-between',
    width: '220px',
})

export const officesBoxStatuses = css({
    color: colors.grayishBlueLight,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.7rem',
    justifyContent: 'space-between',
    
    '& span': {
        marginBottom: '.6rem',
    }
})

export const officesBoxStats = css({
    alignItems: 'center',
    color: colors.grayishBlue,
    fontWeight: 'bold',
})
