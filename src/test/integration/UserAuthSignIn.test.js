import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { UserAuthSignIn } from '../../components/UserAuth/UserAuthSignIn';

describe('UserAuthSignIn component', () => {
    it('displays sign in form correctly', () => {
        const {getByRole, getByLabelText, getByText} = render(<UserAuthSignIn />)

        const emailInput = getByRole('textbox', { name: /email/i });
        const passwordInput = getByLabelText('Password');
        const submitButton = getByRole('button', { name: /sign in/i });
        const text = getByText('Create account');
        
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });
})