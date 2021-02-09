import React from 'react';
import { render } from '@testing-library/react';
import { UserAuth } from '../../components/UserAuth/UserAuth';
import '@testing-library/jest-dom/extend-expect'; 
import userEvent from '@testing-library/user-event';

describe('UserAuth component', () => {
    it('switch forms when click on text', () => {
        const {getByRole, getByText, getAllByText} = render(<UserAuth />)

        const logo = getByRole('heading', { name: /archi dev/i });
        expect(logo).toBeInTheDocument();
        
        userEvent.click(getByText('Create account'));

        expect(getAllByText('Sign Up')).toHaveLength(2);

        userEvent.click(getByText('I already have an account'));

        expect(getAllByText('Sign In')).toHaveLength(2);
        expect(getByText('Create account')).toBeInTheDocument();
    });
})