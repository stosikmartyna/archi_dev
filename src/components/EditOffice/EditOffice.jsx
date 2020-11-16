import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSingleOffice } from '../../hooks/useSingleOffice';
import { ROUTES } from '../../constants/routes';
import { Header } from '../../uiComponents/Header';
import { InputText } from '../../uiComponents/InputText';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputSelect } from '../../uiComponents/InputSelect';
import { Button } from '../../uiComponents/Button';
import { Spinner } from '../Spinner/Spinner';
import { locationOptions, statusOptions, typeOptions } from './EditOffice.constants';
import { SlantedDiv } from '../../uiComponents/SlantedDiv';
import { EditOfficeClientData } from './EditOfficeClientData';
import { container, formContainer, inputsContainer, statusContainer } from './EditOffice.styles';

export const EditOffice = () => {
    const {isFetching, editingOffice, getSingleOffice, updateSingleOffice, handleEditOfficeChange} = useSingleOffice();
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

    return (
        <div className={container}>
            {isFetching && <Spinner />}
            {editingOffice && (
                <form className={formContainer} onSubmit={submitForm}>
                <Header size={'medium'} margin={'1.5'}>Edit office</Header>
                    <div className={inputsContainer}>
                        <div className={statusContainer}>
                            <Header size={'small'} margin={'1.5'}>Change status to provide client data:</Header>
                            <InputSelect 
                                label={'Status'}
                                id={'status'}
                                value={editingOffice.status}
                                options={statusOptions}
                                onChange={handleEditOfficeChange}
                            />
                        </div>
                        <InputText 
                            label={'Office ID'}
                            id={'id'}
                            type={'text'}
                            value={editingOffice.id}
                            onChange={handleEditOfficeChange}
                            error={validateForm(editingOffice.id)}
                        />
                        <InputNumber 
                            label={'Floor'}
                            id={'floor'}
                            value={editingOffice.floor}
                            decimalScale={0}
                            onChange={handleEditOfficeChange}
                            error={validateForm(editingOffice.floor)}
                        />
                        <InputNumber 
                            label={'Area (m²)'}
                            id={'area'}
                            value={editingOffice.area}
                            decimalScale={2}
                            onChange={handleEditOfficeChange}
                            error={validateForm(editingOffice.area)}
                        />
                        <InputSelect 
                            label={'Location'}
                            id={'location'}
                            value={editingOffice.location}
                            options={locationOptions}
                            onChange={handleEditOfficeChange}
                            error={validateForm(editingOffice.location)}
                        /> 
                        <InputNumber 
                            label={'Price (p/m)'}
                            id={'price'}
                            value={editingOffice.price}
                            decimalScale={3}
                            onChange={handleEditOfficeChange}
                            error={validateForm(editingOffice.price)}
                        />
                        <InputSelect 
                            label={'Type'}
                            id={'type'}
                            value={editingOffice.type}
                            options={typeOptions}
                            onChange={handleEditOfficeChange}
                            error={validateForm(editingOffice.type)}
                        />
                        {editingOffice.type === 'Shared offices' && 
                            (
                                <InputNumber 
                                    label={'Offices N°'}
                                    id={'officesNo'}
                                    value={editingOffice.officesNo}
                                    decimalScale={0}
                                    onChange={handleEditOfficeChange}
                                    error={validateForm(editingOffice.officesNo)}
                                />
                            )
                        }
                    </div>
                    <Button>
                        Submit
                    </Button>
                </form>
            )}
            {editingOffice && (editingOffice.status === 'Available' 
                ? <SlantedDiv imagePath={"/img/edit_office_form.jpg"} />
                : <EditOfficeClientData />
            )}
        </div>
    )
}