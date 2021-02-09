import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UserAuthSignUp } from '../../components/UserAuth/UserAuthSignUp';

describe('UserAuthSignUp component', () => {
    it('displays sign up form correctly', () => {
        const {getByRole, getByLabelText, getByText} = render(<UserAuthSignUp />)

        const emailInput = getByRole('textbox', { name: /email/i });
        const passwordInput = getByLabelText('Password');
        const submitButton = getByRole('button', { name: /sign up/i });
        const text = getByText('I already have an account');
        
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });
})