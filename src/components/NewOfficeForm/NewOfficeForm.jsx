import React, { useState } from 'react';
import { useOffices } from '../../hooks/useOffices';
import { Button } from '../../uiComponents/Button';
import { InputText } from '../../uiComponents/InputText';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputSelect } from '../../uiComponents/InputSelect';
import { container, formContainer, officeFormInputs, imageContainer } from './NewOfficeForm.styles';
import { NewOfficeFormClient } from './NewOfficeFormClient';
import { Header } from '../../uiComponents/Header';

const initialState = {
    id: '',
    area: '',
    floor: '',
    status: 'Available',
    created: {user: '', date: ''},
    contract: '',
    client: {
        name: '',
        email: '',
        phone: '',
    }
}

export const NewOfficeForm = () => {
    const [inputsValues, setInputsValues] = useState(initialState);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const {postFormValues, isFetching} = useOffices();

    const isFormExtended = inputsValues.status !== 'Available';

    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }

    const handleClientInputChange = (event) => {
        setInputsValues({
            ...inputsValues, 
            client: {
                ...inputsValues.client,
                [event.target.id]: event.target.value
            }
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
        const isFormValid = inputsValues.id.trim() !== ''
            && inputsValues.area.trim() !== ''
            && inputsValues.floor.trim() !== '' 
        
        const isClientFormValid = inputsValues.contract !== ''
            && inputsValues.client.name.trim() !== ''
            && inputsValues.client.email.trim() !== ''
            && inputsValues.client.phone.trim() !== ''

        const clearForm = () => {
            setInputsValues(initialState) 
            setIsFormSubmitted(false)
        }

        setIsFormSubmitted(true);
        isFormExtended
            ? isFormValid && isClientFormValid && postFormValues(inputsValues) && clearForm()
            : isFormValid && postFormValues(inputsValues) && clearForm()
    }

    const validateForm = (value) => {
        return isFormSubmitted && value.trim() === '';
    }

    const statusOptions = [
        {value: 'Available', name: 'Available'},
        {value: 'Reserved', name: 'Reserved'},
        {value: 'Unavailable', name: 'Unavailable'},
    ]

    const contractOptions = [
        {value: '', name: ''},
        {value: 'Renting', name: 'Renting'},
        {value: 'Buying', name: 'Buying'},
        {value: 'Long lease', name: 'Long lease'},
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
                        label={'Status'}
                        id={'status'}
                        value={inputsValues.status}
                        onChange={handleInputChange}
                        options={statusOptions}
                    />
                </div>
                {isFormExtended && (
                    <NewOfficeFormClient 
                        inputsValues={inputsValues} 
                        onInputChange={handleInputChange} 
                        onClientInputChange={handleClientInputChange}
                        validateForm={validateForm}
                        contractOptions={contractOptions}
                    />
                )}
                <Button disabled={isFetching}>
                    {isFetching ? 'Loading...' : 'Submit'}
                </Button>
            </form>
            <div className={imageContainer} />
        </div>
    )
}