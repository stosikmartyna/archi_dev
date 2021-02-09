import React from 'react';
import { render } from '@testing-library/react';
import { UserAuth } from '../../components/UserAuth/UserAuth';
import '@testing-library/jest-dom/extend-expect'; 

describe('UserAuth component', () => {
    it('displays logo correctly', () => {
        const {getByRole} = render(<UserAuth />)

        const logo = getByRole('heading', { name: /archi dev/i });

        expect(logo).toBeInTheDocument();
    });
})