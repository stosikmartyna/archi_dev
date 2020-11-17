import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSingleOffice } from '../../hooks/useSingleOffice';
import { ROUTES } from '../../constants/routes';
import { Spinner } from '../Spinner/Spinner';
import { SlantedDiv } from '../../uiComponents/SlantedDiv';
import { EditOfficeClientData } from './EditOfficeClientData';
import { EditOfficeOfficeData } from './EditOfficeOfficeData';
import { flexContainer, container } from './EditOffice.styles';

export const EditOffice = () => {
    const {isFetching, editingOffice, getSingleOffice, updateSingleOffice, handleEditOfficeChange, handleClientDataChange} = useSingleOffice();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const pathname = useLocation().pathname;
    const officeKey = pathname.replace(`${ROUTES.EDIT_OFFICE}/`, '')
    // temporary solution - TODO: get officeID as url param 

    useEffect(() => {
        getSingleOffice(officeKey);
    }, [getSingleOffice, officeKey]);

    const submitForm = (event) => {
        event.preventDefault();

        const isFormValid = editingOffice.id.trim() !== ''
            && editingOffice.floor.trim() !== ''
            && editingOffice.area.trim() !== ''
            && editingOffice.location !== ''
            && editingOffice.price.trim() !== ''
            && editingOffice.type !== ''
        
        setIsFormSubmitted(true);
        isFormValid && updateSingleOffice(officeKey, editingOffice);
    }

    const validateForm = (value) => {
        return isFormSubmitted && value.trim() === '';
    }

    const isAvailable = editingOffice?.status === 'Available';

    return (
        <div className={isAvailable ? flexContainer : container}>
            {isFetching && <Spinner />}
            {editingOffice && (
                <EditOfficeOfficeData 
                    editingOffice={editingOffice} 
                    submitForm={submitForm} 
                    validateForm={validateForm} 
                    onEditOfficeChange={handleEditOfficeChange} 
                    isAvailable={isAvailable} 
                />
            )}
            {editingOffice && (isAvailable
                ? <SlantedDiv imagePath={"/img/edit_office_form.jpg"} />
                : <EditOfficeClientData 
                    editingOffice={editingOffice} 
                    onClientDataChange={handleClientDataChange} 
                    submitForm={submitForm} 
                />
            )}
        </div>
    )
}