import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Button } from '../../uiComponents/Button';
import { container, containerText } from './PageNotFound.styles';

export const PageNotFound = () => {
    const history = useHistory();

    const redirectToHomeView = () => {
        history.push(ROUTES.HOME)
    }

    return (
        <div className={container}>
            <div className={containerText}>
                <h1>Page Not Found</h1>
                <h2>Click button to back</h2>
                <Button onClick={redirectToHomeView}>Back home</Button>
            </div>
        </div>
    )
}