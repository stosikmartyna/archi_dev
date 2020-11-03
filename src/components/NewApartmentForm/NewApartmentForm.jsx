import React, { useState } from 'react';
import { useApartments } from '../../hooks/useApartments';
import { Button } from '../../uiComponents/Button';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputSelect } from '../../uiComponents/InputSelect';
import { formContainer, apartmentFormInputs, imageContainer } from './NewApartmentForm.styles';
import { NewApartmentsFormClient } from './NewApartmentFormClient';

const initialState = {
    number: '',
    area: '',
    floor: '',
    rooms: '',
    status: 'Available',
    created: {user: '', date: ''},
    contract: '',
    client: {
        name: '',
        email: '',
        phone: '',
    }
}

export const NewApartmentForm = () => {
    const [inputsValues, setInputsValues] = useState(initialState);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const {postFormValues, isFetching} = useApartments();

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
        
        const isFormValid = inputsValues.number.trim() !== ''
            && inputsValues.area.trim() !== ''
            && inputsValues.floor.trim() !== '' 
            && inputsValues.rooms.trim() !== ''
        
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
        <>
            <form className={formContainer} onSubmit={submitForm}>
                <h1>New apartment</h1>
                <div className={apartmentFormInputs}>
                    <InputNumber 
                        label={'Number'}
                        id={'number'}
                        value={inputsValues.number}
                        onChange={handleInputChange}
                        decimalScale={0}
                        error={validateForm(inputsValues.number)}
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

                    <InputNumber 
                        label={'Rooms N°'}
                        id={'rooms'}
                        value={inputsValues.rooms}
                        onChange={handleInputChange}
                        decimalScale={0}
                        error={validateForm(inputsValues.rooms)}
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
                    <NewApartmentsFormClient 
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
            <div className={imageContainer}/>
        </>
    )
}