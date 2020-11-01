import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useApartments } from '../../hooks/useApartments';
import { form } from './NewApartmentForm.styles';
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

    const displayError = (value) => {
        const isNotValid = isFormSubmitted && value.trim() === '';

        if (isNotValid) {
            return <span>This field is required</span>
        }
    }

    return (
        <>
            <h1>New apartment</h1>
            <form className={form} onSubmit={submitForm}>
                <label htmlFor='number'>Number</label>
                <NumberFormat 
                    id={'number'}
                    value={inputsValues.number} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.number)}
            
                <label htmlFor='floor'>Floor</label>
                <NumberFormat 
                    id={'floor'}
                    value={inputsValues.floor} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.floor)}
                
                <label htmlFor='area'>Area (m²)</label>
                <NumberFormat
                    id={'area'}
                    value={inputsValues.area} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={2}
                />
                {displayError(inputsValues.area)}
                
                <label htmlFor='rooms'>Rooms N°</label>
                <NumberFormat 
                    id={'rooms'}
                    value={inputsValues.rooms}
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.rooms)}
                
                <label htmlFor='status'>Status</label>
                <select id={'status'} value={inputsValues.status} onChange={handleInputChange}>
                    <option value={'Available'}>Available</option>
                    <option value={'Reserved'}>Reserved</option>
                    <option value={'Unavailable'}>Unavailable</option>
                </select>

                {isFormExtended && (
                    <NewApartmentsFormClient 
                        inputsValues={inputsValues} 
                        onInputChange={handleInputChange} 
                        onClientInputChange={handleClientInputChange} 
                        displayError={displayError}
                    />
                )}

                <button disabled={isFetching}>
                    {isFetching ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </>
    )
}