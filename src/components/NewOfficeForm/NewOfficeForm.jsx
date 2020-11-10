import React, { useState } from 'react';
import { useOffices } from '../../hooks/useOffices';
import { Button } from '../../uiComponents/Button';
import { InputText } from '../../uiComponents/InputText';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputSelect } from '../../uiComponents/InputSelect';
import { container, formContainer, officeFormInputs, imageContainer } from './NewOfficeForm.styles';
import { Header } from '../../uiComponents/Header';

const initialState = {
    id: '',
    floor: '',
    area: '',
    location: '',
    price: '',
    type: '',
    officesNo: '',
    status: 'Available',
    created: {user: '', date: ''},
    contract: '',
}

export const NewOfficeForm = () => {
    const [inputsValues, setInputsValues] = useState(initialState);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const {postFormValues, isFetching} = useOffices();

    const isTypeSharedOffices = inputsValues.type === 'Shared offices';

    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }

    const submitForm = (event) => {
        event.preventDefault();
        const isFormValid = inputsValues.id.trim() !== ''
            && inputsValues.area.trim() !== ''
            && inputsValues.type !== ''
            && inputsValues.location !== ''
            && inputsValues.price.trim() !== ''

        const clearForm = () => {
            setInputsValues(initialState);
            setIsFormSubmitted(false);
        }

        setIsFormSubmitted(true);
        isFormValid && postFormValues(inputsValues) && clearForm();
    }

    const validateForm = (value) => {
        return isFormSubmitted && value.trim() === '';
    }

    const typeOptions = [
        {value: '', name: ''},
        {value: 'Open Space', name: 'Open Space'},
        {value: 'Shared offices', name: 'Shared offices'},
    ]

    const locationOptions = [
        {value: '', name: ''},
        {value: 'North', name: 'North'},
        {value: 'South', name: 'South'},
        {value: 'West', name: 'West'},
        {value: 'East', name: 'East'},
        {value: 'All', name: 'All'},
    ]

    const statusOptions = [
        {value: 'Available', name: 'Available'},
        {value: 'Reserved', name: 'Reserved'},
        {value: 'Unavailable', name: 'Unavailable'},
    ]

    return (
        <div className={container}>
            <form className={formContainer} onSubmit={submitForm}>
                <Header size={'medium'} margin={'1.5'}>New office</Header>
                <div className={officeFormInputs}>
                    <InputText 
                        label={'Office ID'}
                        id={'id'}
                        type={'text'}
                        value={inputsValues.id}
                        onChange={handleInputChange}
                        error={validateForm(inputsValues.id)}
                    />

                    <InputNumber 
                        label={'Floor'}
                        id={'floor'}
                        value={inputsValues.floor}
                        onChange={handleInputChange}
                        decimalScale={0}
                        error={validateForm(inputsValues.floor)}
                    />

                    <InputNumber 
                        label={'Area (m²)'}
                        id={'area'}
                        value={inputsValues.area}
                        onChange={handleInputChange}
                        decimalScale={2}
                        error={validateForm(inputsValues.area)}
                    />
                
                    <InputSelect 
                        label={'Location'}
                        id={'location'}
                        value={inputsValues.location}
                        onChange={handleInputChange}
                        options={locationOptions}
                        error={validateForm(inputsValues.location)}
                    /> 

                    <InputNumber 
                        label={'Price (p/m)'}
                        id={'price'}
                        value={inputsValues.price}
                        onChange={handleInputChange}
                        decimalScale={3}
                        error={validateForm(inputsValues.price)}
                    />

                    <InputSelect 
                        label={'Status'}
                        id={'status'}
                        value={inputsValues.status}
                        onChange={handleInputChange}
                        options={statusOptions}
                    />

                    <InputSelect 
                        label={'Type'}
                        id={'type'}
                        value={inputsValues.type}
                        onChange={handleInputChange}
                        options={typeOptions}
                        error={validateForm(inputsValues.type)}
                    /> 

                    {isTypeSharedOffices && 
                        (
                            <InputNumber 
                                label={'Offices N°'}
                                id={'officesNo'}
                                value={inputsValues.officesNo}
                                onChange={handleInputChange}
                                decimalScale={0}
                                error={validateForm(inputsValues.officesNo)}
                            />
                        )
                    }
                </div>
                <Button disabled={isFetching}>
                    {isFetching ? 'Loading...' : 'Submit'}
                </Button>
            </form>
            <div className={imageContainer} />
        </div>
    )
}